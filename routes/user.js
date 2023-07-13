import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// @GET    /users/:id
// @des    Get a user by ID
// @access private
router.get("/:id", verifyToken, getUser);

// @GET    /users/:id/friends
// @des    Get user friends by user ID
// @access private
router.get("/:id/friends", verifyToken, getUserFriends);

// @PATCH  /users/:id/:friendId
// @des    Remove user friend by user ID and friend Id
// @access private
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
