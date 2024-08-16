import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Protected from "./components/Protected";
import Posts from "./pages/Posts";
import GetPosts from "./pages/GetPosts";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/getposts" element={<GetPosts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
