# MERNWrite App - A Blogging Platform in Development

**MERNWrite** is a full-stack blogging application crafted using the MERN stack (**MongoDB, Express, React, Node.js**). It empowers users to create, read, update, and delete blog posts, engage with comments, and enjoy user-friendly authentication and authorization powered by Clerk. 

> **Note:** This is an **ongoing project** with some features under development and known issues to resolve.

---

## ✨ Key Highlights

1. **Rich Blogging Features**: Users can create, edit, and manage blog posts seamlessly.
2. **Modern Design**: Tailwind CSS ensures a clean, responsive user interface.
3. **Real-time Collaboration**: Features like comments enable users to engage directly.
4. **Secure Authentication**: Clerk provides user management and role-based access.
5. **Optimized Media Handling**: ImageKit powers fast, secure, and optimized media uploads.

---

## 📚 Features in Progress

- **Bugs to Resolve:**
  - Comments are sometimes not updating in real-time.
  - Infinite scroll occasionally fails for large datasets.
  - The "Save Blog" feature may not reflect changes immediately.
  - Webhook integrations need testing for reliability.
  
- **Upcoming Features:**
  - **User Profiles**: Personalized user pages to showcase individual blog posts.
  - **Social Media Sharing**: Share blogs directly to platforms like Twitter, LinkedIn, etc.
  - **Draft Management**: Save blog drafts for future editing.
  - **Advanced Analytics**: Insights into blog views, likes, and comments.
  - **Admin Dashboard**: Role-based access to manage blogs and comments.

---

## 🛠️ Technologies Used

### Frontend Stack:
- **React**: For dynamic user interface components.
- **Vite**: Ensures fast builds and an optimized developer experience.
- **Tailwind CSS**: For a responsive and visually appealing design.
- **Axios**: Manages API calls between the frontend and backend.
- **React Router**: Navigation between different views.
- **React Query**: Simplifies data fetching and caching.
- **Clerk**: Handles authentication and user sessions.
- **ImageKit**: Real-time image optimization and CDN.

### Backend Stack:
- **Node.js**: Core runtime for backend operations.
- **Express**: Simplifies routing and middleware handling.
- **MongoDB**: The database for structured and unstructured data.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **Clerk**: Manages backend user authentication.
- **ImageKit**: For secure and optimized media management.
- **Svix**: Powers webhook integrations.

---

## 🗂️ Project Directory Structure

```
MERNWrite/
│
├── client/
│   ├── .env
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── .env
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── package.json
│   └── index.js
│
└── README.md
```

---

## 🚀 Setting Up the Project

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/MERNWrite.git
   cd MERNWrite
   ```

2. Install dependencies:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - **Frontend (.env):**
     ```
     VITE_BASE_API_URL=http://localhost:9000
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     VITE_IK_PUBLIC_KEY=your_imagekit_public_key
     VITE_IK_URL_ENDPOINT=your_imagekit_url_endpoint
     ```

   - **Backend (.env):**
     ```
     MONGODB_URI=your_mongodb_uri
     CLERK_SECRET=your_clerk_secret
     IK_URL_ENDPOINT=your_imagekit_url_endpoint
     IK_PUBLIC_KEY=your_imagekit_public_key
     IK_PRIVATE_KEY=your_imagekit_private_key
     CLIENT_BASE_URL=http://localhost:3000
     PORT=9000
     ```

4. Start the application:
   - **Backend**: 
     ```
     cd server
     npm run dev
     ```
   - **Frontend**:
     ```
     cd client
     npm run dev
     ```

---

## 🧰 Core Functionalities

### APIs

#### **User Management**
- `GET /users/saved`: Retrieve saved blogs.
- `PATCH /users/save`: Save or unsave a blog post.

#### **Blog Operations**
- `GET /blogs`: Retrieve all blogs (supports filtering and sorting).
- `POST /blogs`: Create a new blog.
- `DELETE /blogs/delete/:id`: Delete a specific blog post.

#### **Comment Operations**
- `GET /comments/:postId`: Fetch comments for a blog.
- `POST /comments/:postId`: Add a comment to a blog.

---

## 📝 Contribution Guidelines

1. Fork the repository and create a new branch for your feature or fix.
2. Test your changes thoroughly before creating a pull request.
3. Ensure code adheres to the project's style guidelines.

We welcome all contributions! For any queries, open an issue on the repository or contact the maintainers.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it for your own projects.

---

### For any support or queries, reach out at `support@mernwrite.com`. 🚀

---

This enhanced version adds better visibility with clearly defined sections and details for contributors and collaborators. Let me know if you'd like further tweaks!