import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name: dto.name,
        username: dto.name,
        email: dto.email,
      },
    });
  }

  async getUserAddress(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        addresses: true,
      },
    });
  }
}
