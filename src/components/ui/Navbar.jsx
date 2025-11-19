import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart1.svg";
import profile from "../../assets/images/profile1.svg";
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
    <nav className="bg-white px-2 sm:px-4 md:px-6 lg:px-10 py-2 flex items-center justify-between md:gap-2 lg:gap-0 h-16 sm:h-20 md:h-26 shadow-md z-50 relative">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Teak Heirlooms Logo"
            className="h-8 sm:h-10 md:h-8 lg:h-16 w-auto"
          />
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex md:items-center gap-4 lg:gap-10 font-bold text-sm sm:text-base md:text-lg lg:text-xl text-[#9C0300]">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `transition text-center ${
                isActive
                  ? "bg-[#9C0300] text-white"
                  : "hover:bg-[#9C0300] hover:text-white"
              } lg:h-20 lg:mb-6 md:pt-6 lg:pt-10`
            }
          >
            <p className="px-3 py-2 rounded leading-snug text-sm lg:text-base">{label}</p>
          </NavLink>
        ))}
      </div>


      {/* Right Section */}
      <div className="flex items-center gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Auth Info */}
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-3 text-[#9C0300] font-medium">
            <span className="text-sm sm:text-base">Hi {user.username}</span>
            {user?.is_superuser && (
              <button
                onClick={() => {
                  closeMenu();
                  navigate("/dashboard");
                }}
                className="bg-[#9C0300] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base"
              >
                Admin Panel
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:inline-block bg-[#9C0300] text-white md:px-4 md:py-1 lg:px-6 py-1.5 text-sm sm:text-base"
          >
            Login
          </button>
        )}

        {/* Icons */}
        <div className="flex items-center gap-6 xl:mr-2">
          <Link to="/profile">
            <img
              src={profile}
              alt="profile"
              className="w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10"
            />
          </Link>
          <Link to="/cart" className="relative">
            <img
              src={cart}
              alt="cart"
              className="w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10"
            />
            {numCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs rounded-full px-1.5 py-0.5">
                {numCartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-[#9C0300] z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`fixed top-0 right-0 w-[70vw] max-w-sm h-full bg-[#C68585] text-white z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      > */}
      <div
        className={`fixed top-0 right-0 w-[70vw] max-w-sm h-full bg-[#EDEAE5] text-[#9C0300] z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6 text-base sm:text-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full text-center px-4 py-2 rounded transition ${
                  isActive ? "bg-[#9C0300] text-white" : "hover:bg-[#9C0300] hover:text-white"
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
                    navigate("/dashboard");
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

      {/* Overlay to close mobile menu */}
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
