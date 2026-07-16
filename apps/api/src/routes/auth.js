import express from "express";
import * as ctrl from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", ctrl.login);
router.post("/logout", ctrl.logout);
router.get("/me", authMiddleware, ctrl.me);

export default router;
