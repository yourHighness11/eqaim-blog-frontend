import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogpost from "./components/blogPost/Blogpost";
import Newblog from "./components/newBlog/Newblog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pathId" element={<Blogpost />} />
        <Route path="/newblog" element={<Newblog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
