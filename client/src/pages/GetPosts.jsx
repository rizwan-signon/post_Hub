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
      <h1>hello from get posts</h1>
      <div>
        {posts?.map((post, index) => (
          <div key={index}>
            <h1>{post?.title}</h1>
            <h1>{post?.description}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetPosts;
