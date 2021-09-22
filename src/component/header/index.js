import React from "react";
import "./style.scss";
import Logo from "../../assets/graphics/logo.png";

export default function Header(props) {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}
