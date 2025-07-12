import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.svg";
import profile from "../../assets/images/profile.svg";
import { AuthContext } from "../../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = ({ numCartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useContext(AuthContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/RDship", label: "Ready to Ship" },
    { to: "/design_solution", label: "Design Solution" },
    { to: "/Bfurniture", label: "Bespoke Furniture" },
  ];

  return (
    <nav className="bg-white gap-12 md:gap-2 lg:gap-14 px-4 py-2 flex flex-row md:justify-center lg:justify-start items-center min-w-0 h-20 md:h-32 shadow-md z-50 relative">
      {/* Logo */}
      <div className="flex items-start space-x-1 lg:ml-4">
        <NavLink to="/">
          <img src={Logo} alt="Teak Heirlooms Logo" className="px-2 h-8 md:w-28 w-36 lg:h-10 lg:w-40" />
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex md:gap-2 lg:gap-6 font-bold md:text-base text-[#9C0300] text-center">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-2 pt-4 lg:pt-10 transition ${
                isActive ? "bg-[#9C0300] text-white" : "hover:bg-[#9C0300] hover:text-white"
              }`
            }
          >
           <p className="p-3 leading-snug ">{label}</p> 
          </NavLink>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6 md:space-x-4 lg:space-x-10  ">
        {isAuthenticated ? (
          <span className="text-[#9C0300] font-medium hidden md:block">
            Hi {user.username}
            {user?.is_superuser && (
                <button
                  onClick={() => {
                    closeMenu();
                    navigate("/admin");
                  }}
                  className="bg-[#9C0300] text-white px-3 py-2 rounded-3xl ml-3"
                >
                  Admin Panel
                </button>
              )}
          </span>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="md:ml-1 lg:ml-10 bg-[#9C0300] text-white px-4 py-2 rounded-full hidden md:block"
          >
            Login
          </button>
        )}
        <div className="flex flex-row space-x-6 md:space-x-4 lg:space-x-10">
        <Link to="/profile">
          <img src={profile} alt="profile" className="w-6 h-6 md:w-12 md:h-10 lg:w-8 lg:h-8" />
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart} alt="cart" className="w-6 h-6 md:w-12 md:h-10 lg:w-8 lg:h-8" />
          {numCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {numCartItems}
            </span>
          )}
        </Link>
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          className="md:hidden text-[#9C0300]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#C68585] text-white z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-2 rounded w-full text-center transition ${
                  isActive ? "bg-[#9C0300] text-white" : "hover:bg-[#9C0300]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <>
              <span className="text-lg">Hi {user.username}</span>
              {user?.is_superuser && (
                <button
                  onClick={() => {
                    closeMenu();
                    navigate("/admin");
                  }}
                  className="bg-[#9C0300] text-white px-6  py-2 rounded-full"
                >
                  Admin Panel
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                closeMenu();
                navigate("/login");
              }}
              className="bg-[#9C0300] text-white px-6 py-2 rounded-full"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Overlay to close menu */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  numCartItems: PropTypes.number.isRequired,
};

export default Navbar;
