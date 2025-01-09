import ImageKit from "imagekit";
import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getBlogs = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 2);

    const blogs = await Blog.find()
      .populate("user", "username")
      .limit(limit)
      .skip(limit * (page - 1));

    const totalBlogs = await Blog.countDocuments();
    const hasMore = page * limit < totalBlogs;

    res.status(200).json({ blogs, hasMore });
  } catch (error) {
    console.log("Error in getBlogs Controller", error);
    res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate("user", "username img");
    res.status(200).json(blog);
  } catch (error) {
    console.log("Error in getBlog Controller", error);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);

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
    }

    // Explicitly remove `id` from the request body if it exists
    const { id, ...rest } = req.body;

    const newBlog = new Blog({
      user: user._id,
      slug,
      ...rest,
    });

    await newBlog.save();
    res.status(201).json("Blog Created Successfully");
  } catch (error) {
    console.error("Error in createBlog Controller:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";
    
    if(role === "admin") {
      await Blog.findByIdAndDelete(req.params.id);
      return res.status(200).json("Blog Deleted Successfully");
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

export const featurePost = async (req, res) => {

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
