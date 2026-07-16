import { timingSafeEqual } from "crypto";
import jwt from "jsonwebtoken";

function safeCompare(a = "", b = "") {
  const A = Buffer.from(String(a));
  const B = Buffer.from(String(b));
  const len = Math.max(A.length, B.length);
  const aP = Buffer.alloc(len);
  A.copy(aP);
  const bP = Buffer.alloc(len);
  B.copy(bP);
  return timingSafeEqual(aP, bP);
}

const mockUsers = [
  {
    id: "1",
    username: "admin",
    name: "Administrator",
    role: "admin",
    password: "password",
  },
  {
    id: "2",
    username: "user",
    name: "Demo User",
    role: "user",
    password: "secret",
  },
  {
    id: "3",
    username: "ankit8982",
    name: "Ankit",
    role: "customer",
    password: "n/a",
  },
];

const mockOtps = { ankit8982: "1234", admin: "0000", user: "1111" };

export function verifyOtp(username, otp) {
  if (!username || !otp) return null;
  const user = mockUsers.find((u) => u.username === username);
  if (!user) return null;
  const expected = String(mockOtps[username] ?? "");
  if (!safeCompare(expected, String(otp))) return null;
  const { password: _p, ...publicUser } = user;
  return publicUser;
}

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const JWT_EXPIRES = process.env.JWT_EXPIRES || "7d";

export function createJwt(user) {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES },
  );
}

export function verifyJwt(token) {
  return jwt.verify(token, JWT_SECRET);
}
