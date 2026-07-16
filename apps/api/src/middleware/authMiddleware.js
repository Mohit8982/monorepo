import { verifyJwt } from '../services/authService.js';

export default function authMiddleware(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'unauthenticated' });

  try {
    const payload = verifyJwt(token);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid_token' });
  }
}