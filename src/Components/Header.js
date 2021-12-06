import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h2 className="heading">To-Do-List</h2>
          <img src={logo} alt="TodoList" className="logo-image"></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;
