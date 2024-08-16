import { useEffect, useState } from "react";

const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await fetch("/api/getposts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <section>
      <div className="sm:max-w-6xl max-w-lg mx-auto">
        {posts?.map((post, index) => (
          <div key={index}>
            <div className="flex items-end gap-4">
              <span className="text-3xl font-medium text-green-700">
                {index + 1}.
              </span>
              <h1 className=" text-3xl capitalize text-green-700 font-medium">
                {post?.title}
              </h1>
              <p className="text-green-700 font-bold">{post.createdAt}</p>
              <h1 className="text-blue-700 font-bold">Author({post.author})</h1>
            </div>
            <p className="text-xl mb-5 text-justify">{post?.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetPosts;
