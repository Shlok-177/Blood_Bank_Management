import express from "express";
const router = express.Router();
import {
  login,
  registerUser,
  getUsersReview,
  addFeedback,
  acceptRequest,
  getAllUsers,
} from "../controllers/userController.js";
import { admin } from "../middleware/authMiddleware.js";

//router.route("/").post(registerUser).get( admin, getAllUsers);
router.post("/register", registerUser);
router.post("/login", login);
router.get("/reviews", getUsersReview);
router.put("/:id/accept", acceptRequest);
router.put("/:id/feedback", addFeedback);

export default router;
