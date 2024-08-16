import { useState } from "react";

const Posts = () => {
  const [formData, setFormData] = useState({});
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <section>
      <div>
        <h1>create your post</h1>
        <div>
          <form action="#">
            <input
              onChange={handlechange}
              type="text"
              placeholder="title..."
              id="title"
            />
            <input
              onChange={handlechange}
              type="text"
              placeholder="description..."
              id="description"
            />
            <input
              onChange={handlechange}
              type="text"
              placeholder="author..."
              id="author"
            />
            <button>Post</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Posts;
