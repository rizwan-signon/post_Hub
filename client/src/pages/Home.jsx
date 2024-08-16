import hero from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div className=" sm:max-w-6xl max-w-lg mx-auto flex sm:flex-row flex-col items-center sm:gap-8 sm:min-h-screen mt-[20%] sm:mt-0">
        <div className="w-1/2 p-2 flex flex-col sm:gap-5">
          <h1 className="sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-green-500 bg-clip-text text-transparent leading-snug">
            welcome to post Hub connect to the world
          </h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            alias nisi, veniam minima laboriosam ad a aperiam voluptate minus
            perferendis molestias itaque animi, asperiores, eos natus vel
            blanditiis quod ducimus?
          </p>
          <Link to={"/register"}>
            <button className="p-3 sm:w-2/4 w-full rounded-lg bg-blue-700 text-white my-6 uppercase font-bold hover:opacity-85">
              register
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={hero} alt="hero image" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
