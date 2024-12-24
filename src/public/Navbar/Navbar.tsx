import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/">LOGO</a>
      </div>
      <div className={`navbar-links ${isOpen && "open"}`}>
        <a href="/">ABOUT ME</a>
        <a href="/">PORTFOLIO</a>
        <a href="/">CONTACT</a>
      </div>
      <div
        className={`navbar-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </div>
  );
};
