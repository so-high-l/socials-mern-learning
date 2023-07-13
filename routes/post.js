import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// @GET    /posts
// @des     Get feed posts
// @access  private
router.get("/", verifyToken, getFeedPosts);

// @GET    /posts/:userId/posts
// @des     Get User's Posts by user Id
// @access  private
router.get("/:userId/posts", verifyToken, getUserPosts);

// @PATCH   /posts/:id/like
// @des     Like a post / unlike
// @access  private
router.get("/:id/like", verifyToken, likePost);

export default router;
