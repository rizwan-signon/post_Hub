import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/theme";
const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      onClick={() => dispatch(toggleTheme())}
      className="flex items-center gap-2 relative rounded-2xl border px-2 py-1"
    >
      <div>
        <FaMoon />
      </div>
      <div>
        <MdLightMode />
      </div>
      <div
        className={`${
          theme === "light"
            ? "min-h-6 min-w-6 bg-blue-700 absolute rounded-full left-2"
            : "min-h-6 min-w-6 bg-blue-700 absolute rounded-full right-2"
        }`}
      ></div>
    </div>
  );
};

export default Theme;
