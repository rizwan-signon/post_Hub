import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className=" bg-blue-700 py-2">
      <nav className=" max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-5xl">
          <MdOutlinePermMedia className="text-white" />
        </div>
        <ul className="text-white flex items-center gap-6 text-xl uppercase">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/posts"}>posts</Link>
          </li>
        </ul>
        <div className="text-white flex items-center gap-6">
          <Link to={"/register"}>
            <button className=" px-4 py-2 rounded-lg bg-green-700 text-white uppercase">
              Register
            </button>
          </Link>
          <Link to={"/login"}>
            <button className=" px-3 py-2 rounded-lg bg-green-700 text-white uppercase">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
