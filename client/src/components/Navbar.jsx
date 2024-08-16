import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Theme from "./Theme";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className=" bg-blue-500 text-white py-2 w-full z-50">
      <nav className=" max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-5xl">
          <MdOutlinePermMedia className="text-white" />
        </div>
        <ul className="text-white flex items-center gap-6 text-xl uppercase">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/getposts"}>Feed</Link>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
        <div className="text-white flex items-center gap-6">
          <Link to={"/register"}>
            <button className=" px-4 py-2 rounded-lg bg-green-700 text-white uppercase">
              Register
            </button>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <h1>{currentUser.userName}</h1>
            ) : (
              <button className=" px-3 py-2 rounded-lg bg-blue-700 text-white uppercase">
                Login
              </button>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
