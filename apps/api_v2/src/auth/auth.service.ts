import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  private users = [
    { id: 1, username: "mohit", otp: "1234", name: "Mohit" },
    { id: 2, username: "admin", otp: "0000", name: "Admin User" },
    { id: 3, username: "john", otp: "5678", name: "John Doe" },
    { id: 4, username: "guest", otp: "9999", name: "Guest User" },
  ];

  constructor(private jwtService: JwtService) {}

  async register(registerDto: RegisterDto) {
    const { username, otp, name } = registerDto;

    const existingUser = this.users.find((u) => u.username === username);
    if (existingUser) {
      throw new UnauthorizedException("User already exists");
    }

    const newUser = {
      id: this.users.length + 1,
      username,
      otp,
      name,
    };

    this.users.push(newUser);

    return {
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username, name: newUser.name },
    };
  }

  async login(loginDto: LoginDto) {
    const { username, otp } = loginDto;

    const user = this.users.find(
      (u) => u.username === username && u.otp === otp,
    );
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: { id: user.id, username: user.username, name: user.name },
    };
  }

  async validateUser(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }
    return user;
  }
}
