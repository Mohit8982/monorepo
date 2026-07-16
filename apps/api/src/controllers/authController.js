import * as service from "../services/authService.js";

export const login = (req, res, next) => {
  const { username, otp } = req.body || {};
  const user = service.verifyOtp(username, otp);
  if (!user) return res.status(401).json({ error: "invalid_credentials" });

  const token = service.createJwt(user);
  const secure = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.json({ user });
};

export const logout = (req, res) => {
  const secure = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
  });
  return res.json({ ok: true });
};

export const me = (req, res) => {
  return res.json({
    status: true,
    user: req.user,
  });
};
