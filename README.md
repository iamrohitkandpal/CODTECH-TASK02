# MERNWrite App - A Blogging Platform in Development

![image](https://github.com/user-attachments/assets/36841f92-05a5-43e0-b547-5a0ced757494)

## **Project Details**  

### Developer Information  
- **Name:** Rohit Navinchandra Kandpal  
- **Company:** CODTECH IT SOLUTIONS PVT. LTD.  
- **Employee ID:** CT08DHC  
- **Domain:** Full Stack Web Development  

### Internship Duration  
- **Start Date:** 20th December 2024  
- **End Date:** 20th January 2025  

### Mentor  
- **Name:** Neela Santhosh Kumar  

This project is part of my professional journey at CODTECH IT SOLUTIONS, showcasing my expertise in full-stack web development and dedication to building innovative solutions under expert guidance.  

---

**MERNWrite** is a full-stack blogging application built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete blog posts, as well as comment on them. The app features user authentication and authorization via **Clerk**, as well as real-time image optimization and transformation using **ImageKit**.

---

## 🚀 Project Overview

This is an **ongoing project**, currently under active development. While key functionalities such as blog CRUD operations and authentication are working, **several bugs** need to be resolved, and **additional features** will be added in upcoming updates. These include but are not limited to:

- Enhanced commenting system with better moderation controls
- Advanced image editing features
- More robust error handling and validations
- Optimizations for scalability and performance

Feel free to explore the project, report issues, and contribute!

---

## 🛠️ Technologies Used

### Frontend

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides a faster development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for making requests.
- **React Query**: Provides hooks for fetching, caching, and syncing data in React.
- **React Router**: A declarative routing library for React applications.
- **Clerk**: Authentication and user management service.
- **ImageKit**: Real-time image optimization and transformation.
- **React Quill**: A rich text editor for creating blog posts with formatting.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing blog posts and comments.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Clerk**: Handles user authentication and authorization.
- **ImageKit**: Real-time image optimization.
- **Svix**: Webhooks as a service to handle events like user creation.

---

## 📂 Project Structure

```plaintext
MERNWrite App/
│
├── client/                         # Frontend code
│   ├── .env                        # Environment variables for frontend
│   ├── .gitignore                  # Git ignore file for client
│   ├── index.html                  # Main HTML file
│   ├── package.json                # Frontend dependencies
│   ├── postcss.config.js           # PostCSS config for Tailwind
│   ├── public/                     # Public assets
│   ├── src/                        # Source code
│   │   ├── App.jsx                 # Main React component
│   │   ├── components/             # Reusable components
│   │   ├── index.css               # Global CSS
│   │   ├── layouts/                # Layouts for pages
│   │   ├── main.jsx                # Main entry point for React
│   │   ├── pages/                  # React pages
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── vite.config.js              # Vite configuration
│
├── server/                         # Backend code
│   ├── .env                        # Environment variables for backend
│   ├── .gitignore                  # Git ignore file for server
│   ├── controllers/                # Controllers for route logic
│   ├── index.js                    # Main entry point for server
│   ├── lib/                        # Utility functions
│   ├── middlewares/                # Custom middleware for requests
│   ├── models/                     # Mongoose models (blog, user, etc.)
│   ├── package.json                # Server dependencies
│   ├── routes/                     # API routes for blog and user actions
└── README.md                       # Project documentation
```

---

## 📥 Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/MERNWrite.git
cd MERNWrite
```

### Install Dependencies

Install the client-side dependencies:

```bash
cd client
npm install
```

Install the server-side dependencies:

```bash
cd ../server
npm install
```

---

## ⚙️ Environment Variables

### Client

Create a `.env` file in the `client` folder and add the following:

```bash
VITE_BASE_API_URL=http://localhost:9000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_IK_PUBLIC_KEY=your_imagekit_public_key
VITE_IK_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Server

Create a `.env` file in the `server` folder and add the following:

```bash
MONGODB_URI=your_mongodb_uri
CLERK_SECRET=your_clerk_secret
IK_URL_ENDPOINT=your_imagekit_url_endpoint
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
CLIENT_BASE_URL=http://localhost:3000
PORT=9000
```

---

## 🚀 Running the Application

1. Start the **server**:

```bash
cd server
npm run dev
```

2. Start the **client**:

```bash
cd client
npm run dev
```

Visit the application in your browser at `http://localhost:3000`.

---

## 📡 API Endpoints

### User Routes

- **GET** `/users/saved` - Get saved blogs for the authenticated user.
- **PATCH** `/users/save` - Save or unsave a blog post.

### Blog Routes

- **GET** `/blogs` - Get all blogs with optional filters (category, search, author, sort, featured).
- **GET** `/blogs/:slug` - Get a single blog by slug.
- **POST** `/blogs` - Create a new blog post.
- **DELETE** `/blogs/delete/:id` - Delete a blog post by ID.
- **PATCH** `/blogs/featureBlog` - Feature or unfeature a blog post.

### Comment Routes

- **GET** `/comments/:postId` - Get comments for a blog post.
- **POST** `/comments/:postId` - Add a comment to a blog post.
- **DELETE** `/comments/:id` - Delete a comment by ID.

### Webhook Routes

- **POST** `/webhooks/clerk` - Handle Clerk webhooks.

---

## 📱 Client Features

- **Home Page**: Displays featured posts and recent blogs.
- **Blog List**: Infinite scrolling with filters (category, author, sort) and search functionality.
- **Single Blog Page**: Displays a detailed view of a blog post, with comments and actions (save, feature, delete).
- **Create Blog**: Form to create a new blog post with a rich text editor and image/video upload.
- **Authentication**: User authentication via **Clerk**.
- **Responsive Design**: Mobile-friendly, responsive UI built with **Tailwind CSS**.

---

## 💻 Server Features

- **Authentication**: Middleware for protected routes using **Clerk**.
- **CRUD Operations**: Complete CRUD functionality for blog posts and comments.
- **Image Handling**: Upload, transform, and optimize images using **ImageKit**.
- **Webhooks**: Handle Clerk webhooks for user-related events.
- **Database**: MongoDB as the backend database with **Mongoose** ORM.

---

## 🤝 Contributing

We welcome contributions! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a description of your changes.

---

## 📄 License

This project is licensed under the **MIT License**.

---
