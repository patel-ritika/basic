import React, {useState} from 'react';
import "../asset/styles/header.css";
import logo from "../asset/images/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <NavLink to="/">
        <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
             to="/work"
             className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
             >WORK
             </NavLink></li>
          <li className="nav-item">
          <NavLink
             to="/about"
             className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
             >ABOUT
             </NavLink></li>
          <li className="nav-item">
          <NavLink
             to="/news"
             className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
             >NEWS
             </NavLink></li>
          <li className="nav-item">
          <NavLink
             to="/thinking"
             className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
             >THINKING
             </NavLink></li>
          <li className="nav-item">CAREERS</li>
          <li className="nav-item">CONTACT</li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "MENU"}
      </div>
    </header>
  );
}

export default Header;
