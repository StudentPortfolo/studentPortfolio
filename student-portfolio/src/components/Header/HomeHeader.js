import { Link, Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import Pricing from "../Navigation/Pricing";
import Products from "../Navigation/Products";
import Resources from "../Navigation/Resources";
import ContactUs from "../Navigation/ContactUs";
import "./HomeHeader.css";


const HomeHeader = () => {
  return (<div>
    <div className="main-header row sticky-top">
      <div className="logo-header col-sm-6">
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="nav-header col-sm-6">
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
      </div>
    </div>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  </div>
    
  );
};

export default HomeHeader;
