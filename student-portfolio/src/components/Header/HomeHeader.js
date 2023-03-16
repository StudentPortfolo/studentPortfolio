import { Link, Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import Pricing from "../Navigation/Pricing";
import Products from "../Navigation/Products";
import Resources from "../Navigation/Resources";
import ContactUs from "../Navigation/ContactUs";
import "./HomeHeader.css"

const HomeHeader = () => {
  return (
    <div>
      <ul className="nav-container">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/contactUs">ContactUs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default HomeHeader;
