import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const CreateBlog = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [content, setContent] = useState("")

  const mutation = useMutation({
    mutationFn: async (newBlog) => {
      const token = await getToken();
      return axios.post("/blogs", newBlog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (!isLoaded && !isSignedIn) {
    return <div className="">Please sign in to create a blog</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title: e.target[0].value,
      category: e.target[1].value,
      description: e.target[2].value,
      content: e.target[3].value,
    };
    mutation.mutate(newBlog);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a Cover Image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a Category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          className="p-4 rounded-xl bg-white shadow-md outline-none"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
