import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUser } from "../redux/slices/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) throw new Error("user not found");

      dispatch(storeUser(data));
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <div className="max-w-sm sm:max-w-lg mx-auto mt-16">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-700 uppercase text-center mb-8">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        action="#"
        className=" shadow-xl max-w-4xl mx-auto px-6 py-10"
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
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
          <button className=" bg-blue-700 rounded-lg p-3 w-full text-white uppercase font-medium hover:opacity-85">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
