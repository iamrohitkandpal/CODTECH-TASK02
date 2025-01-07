import ImageKit from "imagekit";
import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log("Error in getBlogs Controller", error);
    res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    console.log("Error in getBlog Controller", error);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    let existingBlog = await Blog.findOne({ slug });

    let counter = 2;
    while (existingBlog) {
      slug = `${slug}-${counter}`;
      existingBlog = await Blog.findOne({ slug });
      counter++;
    };

    const newBlog = new Blog({ user: user._id, slug, ...req.body });

    await newBlog.save();
    res.status(201).json("Blog Created Successfully");
  } catch (error) {
    console.log("Error in createBlog Controller", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    const user = await User.findOne({ clerkUserId });

    const deletedBlog = await Blog.findByIdAndDelete({
      _id: req.params.id,
      user: user._id,
    });

    if (!deletedBlog) {
      return res.status(403).json("You can delete only your blogs!");
    }

    res.status(200).json("Blog Deleted Successfully");
  } catch (error) {
    console.log("Error in deleteBlog Controller", error);
    res.status(500).json({ message: error.message });
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  } catch (error) {
    console.error("Error getting authentication parameters:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
