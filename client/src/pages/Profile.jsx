import { useState } from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className=" max-w-sm sm:max-w-lg mx-auto">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-700 uppercase text-center mb-8">
        Login
      </h1>
      <form action="#">
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          <input
            value={currentUser.userName}
            onChange={handleChange}
            type="text"
            placeholder="username"
            id="userName"
            className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
          />
          <input
            value={currentUser.email}
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
          <button className=" bg-blue-700 rounded-lg p-3 w-full text-white uppercase font-medium hover:opacity-85">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
