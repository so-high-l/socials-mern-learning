import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// @POST    /auth/login
// @des     Login a user
// @access  public
router.get("/login", login);

export default router;
