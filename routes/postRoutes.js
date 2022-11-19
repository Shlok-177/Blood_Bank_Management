import express from "express";
const router = express.Router();
import {
  updatePostManage,
  addRequestPost,
  getPostById,
  getPosts,
  updateDonationDate,
} from "../controllers/postController.js";
import { admin } from "../middleware/authMiddleware.js";

router.route("/").post(addRequestPost).get(getPosts);
router.route("/:id").get(admin, getPostById);
router.route("/:id/manage").put(updatePostManage);
router.route("/:id/review").put(admin, updateDonationDate);

export default router;
