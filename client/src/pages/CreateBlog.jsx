import { useAuth, useUser } from "@clerk/clerk-react";
import 'quill/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Upload from './../components/Upload';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const CreateBlog = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    img && setContent((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (newBlog) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_BASE_API_URL}/blogs`, newBlog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Blog Created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="">Please sign in to create a blog</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: content,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <button type="button" className="w-max p-2 shadow-md rounded-lg text-sm text-gray-500 bg-white">
          <Upload type="image" setProgress={setProgress} setData={setCover}>
            Add a Cover Image
          </Upload>
        </button>
        <input
          className="text-4xl md:text-2xl font-semibold bg-transparent outline-none"
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
            className="p-2 rounded-lg bg-white outline-none text-sm shadow-md"
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
          className="p-4 text-sm outline-none rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />

        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <button type="button">🖼️</button>
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <button type="button">🎦</button>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={content}
            onChange={setContent}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button disabled={mutation.isPending || (0 < progress && progress < 100)} className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
          {mutation.isPending ? "Creating..." : "Create Blog"}
        </button>
        
        {"Progress:" + progress}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  );
};

export default CreateBlog;
