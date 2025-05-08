import express from "express";
import {
  registerUser,
  getUsers,
  getUser,
  loginUser,
  updateUser,
  forgotPassword,
  resetPassword
} from "../controller/auth.js";

const router = express.Router();

router.post("/auth/register", registerUser);

router.get("/auth/users", getUsers);

router.get("/auth/:id", getUser);

router.post("/auth/login", loginUser);

router.put("/auth/:id", updateUser);

router.post("/auth/forgot-password", forgotPassword);

router.post("/auth/reset-password/:token", resetPassword);

export default router;
