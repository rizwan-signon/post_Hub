import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/create_post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate("/getposts");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <section className="sm:max-w-6xl mx-auto max-w-lg">
      <div>
        <h1 className="sm:text-5xl font-bold text-center capitalize py-10 bg-gradient-to-r from-blue-400 via-green-500 to-green-500 bg-clip-text text-transparent ">
          create your post
        </h1>
        <div>
          <form
            onSubmit={handleCreatePost}
            action="#"
            className="p-2 flex flex-col max-w-lg mx-auto shadow-2xl"
          >
            <input
              onChange={handlechange}
              type="text"
              placeholder="title..."
              id="title"
              className=" p-3 my-2 outline-none rounded-lg text-xl bg-gray-200"
            />
            <textarea
              onChange={handlechange}
              type="text"
              placeholder="description..."
              id="description"
              className=" p-3 my-2 outline-none rounded-lg text-xl bg-gray-200"
            />
            <input
              onChange={handlechange}
              type="text"
              placeholder="author..."
              id="author"
              className=" p-3 my-2 outline-none rounded-lg text-xl bg-gray-200"
            />
            <button className="w-1/4 ml-[75%] bg-green-700 rounded-lg p-3">
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Posts;
