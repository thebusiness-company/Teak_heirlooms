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
    <nav className="bg-white px-4 py-2 flex justify-between items-center w-full h-20 shadow-md z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 ml-4">
        <NavLink to="/">
          <img src={Logo} alt="Teak Heirlooms Logo" className="h-10 w-40" />
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12 font-bold text-lg text-[#9C0300]">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 pt-6 transition ${
                isActive ? "bg-[#9C0300] text-white" : "hover:bg-[#9C0300] hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 md:gap-12 mr-6">
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
            className="bg-[#9C0300] text-white px-4 py-2 rounded-full hidden md:block"
          >
            Login
          </button>
        )}

        <Link to="/profile">
          <img src={profile} alt="profile" className="w-8 h-8" />
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart} alt="cart" className="w-8 h-8" />
          {numCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {numCartItems}
            </span>
          )}
        </Link>

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
                  className="bg-[#9C0300] text-white px-6 py-2 rounded-full"
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
