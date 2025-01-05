import { Webhook } from "svix";
import User from "../models/user.model.js";
import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";

export const clerkWebHook = async (req, res) => {
  const SECRET = process.env.CLERK_SECRET;

  if (!SECRET) {
    console.error("Clerk Secret is not defined");
    return res.status(500).json({ message: "Server configuration error" });
  }

  // Use the raw body for verification
  const payload = req.body;
  const headers = req.headers;

  if (!payload) {
    console.error("Raw body is undefined");
    return res.status(400).json({ message: "Invalid payload" });
  }

  if (!headers) {
    console.error("Headers are missing");
    return res.status(400).json({ message: "Invalid headers" });
  }

  // Create a new Webhook instance with the secret
  const webhook = new Webhook(SECRET);
  let evt;

  try {
    // Verify the webhook payload and headers
    evt = webhook.verify(payload, headers);

    // Handle the "user.created" event
    if (evt.type === "user.created") {
      const userData = evt.data;

      const newUser = new User({
        clerkUserId: userData.id,
        username:
          userData.username ||
          userData.email_addresses?.[0]?.email_address ||
          "unknown",
        email: userData.email_addresses?.[0]?.email_address || "unknown",
        img: userData.profile_image_url || null,
      });

      await newUser.save();
      console.log("New user saved:", newUser);
    }

    if (evt.type === "user.deleted") {
      const deletedUser = await User.findOneAndDelete({
        clerkUserId: evt.data.id,
      });

      await Blog.deleteMany({ user: deletedUser._id });
      await Comment.deleteMany({ user: deletedUser._id });
    }

    res.status(200).json({ message: "Webhook Verified and Handled" });
  } catch (error) {
    console.error(
      "Error in clerkWebHook Controller:",
      error.message,
      error.stack
    );
    res
      .status(400)
      .json({ message: "Webhook Verification Failed", error: error.message });
  }
};
