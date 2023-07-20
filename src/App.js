import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:productId" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
