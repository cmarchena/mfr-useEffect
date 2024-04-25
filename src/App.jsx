import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products" element={<ProductsList />} />
      </Routes>
    </Router>
  );
}

export default App;
