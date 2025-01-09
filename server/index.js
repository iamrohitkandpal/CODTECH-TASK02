import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./lib/database.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import webHookRoutes from "./routes/webhook.routes.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Check for required environment variables
if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL, // Frontend URL
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(clerkMiddleware());
app.use("/webhooks", webHookRoutes); // Raw body parser is used inside webhook.routes.js
app.use(express.json()); // Only for non-raw JSON requests
app.use(express.urlencoded({ extended: true })); // For form submissions

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* Route Protection Methods
// app.get("/auth-state", (req, res) => {
//   const authState = req.auth;
//   res.json(authState);
// });
// app.get("/protect", (req, res) => {
//   const {userId} = req.auth;
//   if(!userId) {
//     return res.status(401).json({message: "Not Authenticated"});
//   }
//   res.status(200).json({message: "Protected Route"});
// });
// app.get("/clerkAuth", requireAuth(), (req, res) => {
//   res.status(200).json({message: "Protected Route"});
// }); 
*/

// Routes
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/comments", commentRoutes);

// Default Route for Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handling Middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || "Something Went Wrong!",
    status: error.status,
    error: process.env.NODE_ENV === "development" ? error.stack : {}, // Show stack trace only in development
  });
});

// Start Server and Connect DB
const PORT = process.env.PORT || 9000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit process on failure
  }
};

startServer();
