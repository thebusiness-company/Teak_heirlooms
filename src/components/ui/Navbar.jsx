import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Style from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={Style.navbar}>
      {/* Logo */}
      <div className={Style.logo_container}>
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Teak Heirlooms Logo" className={Style.logo} />
        </NavLink>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={Style.hamburger_menu}>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`${Style.nav_links} ${isMenuOpen ? Style.slide_in : Style.slide_out}`}>
        <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? Style.active : '')}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={toggleMenu} className={({ isActive }) => (isActive ? Style.active : '')}>
          Shop
        </NavLink>
        <NavLink to="/RDship" onClick={toggleMenu} className={({ isActive }) => (isActive ? Style.active : '')}>
          Ready to Ship
        </NavLink>
        <NavLink to="/design_solution" onClick={toggleMenu} className={({ isActive }) => (isActive ? Style.active : '')}>
          Design Solution
        </NavLink>
        <NavLink to="/Bfurniture" onClick={toggleMenu} className={({ isActive }) => (isActive ? Style.active : '')}>
          Bespoke Furniture
        </NavLink>
        
      </div>
        <button className={Style.login_button}>Login</button>
    </nav>
  );
};

export default Navbar;
