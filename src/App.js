import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product";
import Market from "./pages/Market";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
