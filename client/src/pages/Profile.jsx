import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../redux/slices/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = res.json();
      dispatch(storeUser(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      alert(data.message);
      navigate("/");
      dispatch(storeUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" max-w-sm sm:max-w-lg mx-auto mt-[20%] sm:mt-[10%]">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-700 uppercase text-center mb-8">
        update
      </h1>
      <form action="#" onSubmit={handleUpdate}>
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            id="userName"
            className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="email"
            id="email"
            className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            id="password"
            className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
          />
          <div className="flex items-center gap-6">
            <button
              onClick={handleDelete}
              className=" bg-red-700 rounded-lg p-3 text-center w-full text-white uppercase font-medium hover:opacity-85"
            >
              delete
            </button>

            <button
              onClick={handleUpdate}
              className=" bg-blue-700 rounded-lg p-3 w-full text-white uppercase font-medium hover:opacity-85"
            >
              update
            </button>
            <Link
              to="/posts"
              className=" bg-green-700 rounded-lg p-3 text-center w-full text-white uppercase font-medium hover:opacity-85"
            >
              <button className=" uppercase">create Post</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
