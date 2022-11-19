import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
const addRequestPost = asyncHandler(async (req, res) => {
  const { alternateMobile, relationship, requestBloodGroup, time, userId } =
    req.body;
  //console.dir(userId);
  const post = new Post({
    user: userId,
    alternateMobile,
    relationship,
    requestBloodGroup,
    time,
  });

  const createdPost = await post.save();
  await Post.db.collection("posts").insertOne(createdPost);

  res.status(201).json(createdPost);
});

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.db.collection("posts").find().toArray();
  //console.log(posts);
  res.json(posts);
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
// @access  Private/Admin
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.db.collection("posts").findOne({
    _id: new ObjectId(req.params.id),
  });

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Update donation date
// @route   PUT /api/posts/:id/review
// @access  Private/Admin
const updateDonationDate = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.donationDate = req.body.donationDate;
    post.isReview = true;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Update post manage
// @route   PUT /api/posts/:id/manage
// @access  Private
const updatePostManage = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.isManage = true;
    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

export {
  addRequestPost,
  getPosts,
  getPostById,
  updateDonationDate,
  updatePostManage,
};
