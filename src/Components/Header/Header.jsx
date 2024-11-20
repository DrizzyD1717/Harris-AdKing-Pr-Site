import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact" className="contactNav">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
