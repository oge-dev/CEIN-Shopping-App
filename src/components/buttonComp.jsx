import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, linkText }) => {
  return (
    <button>
      <Link to={to}>{linkText}</Link>
    </button>
  );
};

export default Button;
