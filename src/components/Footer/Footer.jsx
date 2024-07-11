import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/white-Logo.png";
import ImgComp from "../imgComp";

const Footer = () => {
  return (
    <footer>
      <div className="footer-items">
        <div className="contact">
          <div className="logo">
            <Link to="/">
              <ImgComp src={Logo} alt={"cein logo"} />
            </Link>
          </div>
          <p>
            <strong>Address: </strong>
            <span>Lahore Road, Sheikhupura</span>
          </p>

          <p>
            <strong>E-mail: </strong>
            <span>Example@gmail.com</span>
          </p>

          <p>
            <strong>Phone: </strong>
            <span>0092 356 3656210</span>
          </p>
        </div>
        <div className="Shopping-Categories">
          <h4>Shopping and Categories</h4>
          <Link to="/category/Men's%20Collections">Men's Collections</Link>
          <Link to="/category/Women's%20Collections">Women's Collections</Link>
          <Link to="/category/Kids%20Collections">Kids' Collections</Link>
        </div>
        <div className="Useful-Links">
          <h4>Useful Links</h4>
          <Link to="/">Homepage</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Help</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="Help-Information">
          <h4>Help & Information</h4>
          <Link to="/">FAQ’S</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Tracking Id</Link>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2024 Cien. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
