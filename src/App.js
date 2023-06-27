import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
