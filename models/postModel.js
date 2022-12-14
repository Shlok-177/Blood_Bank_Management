import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    alternateMobile: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    requestBloodGroup: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    donationDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

export default Post;
