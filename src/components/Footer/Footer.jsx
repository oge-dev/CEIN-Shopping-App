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
            <strong>Address:</strong>
            <span>Lahore Road, Sheikhupura</span>
          </p>

          <p>
            <strong>E-mail:</strong>
            <span>Example@gmail.com</span>
          </p>

          <p>
            <strong>Phone:</strong>
            <span>0092 356 3656210</span>
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2024 Cien. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
