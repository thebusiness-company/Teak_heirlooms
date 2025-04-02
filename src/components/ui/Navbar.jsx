import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Style from "./Navbar.module.css";
import { HeartIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem("access_token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    // Load user on mount
    loadUser();

    // Listen for login/logout updates
    window.addEventListener("userLoggedIn", loadUser);

    return () => {
      window.removeEventListener("userLoggedIn", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");

    // Dispatch event to update Navbar
    window.dispatchEvent(new Event("userLoggedIn"));
  };

  return (
    <nav className={Style.navbar}>
      <div className={Style.logo_container}>
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Teak Heirlooms Logo" className={Style.logo} />
        </NavLink>
      </div>

      <div className={Style.nav_links}>
        <NavLink to="/" className={({ isActive }) => (isActive ? Style.active : "")}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? Style.active : "")}>Shop</NavLink>
        <NavLink to="/RDship" className={({ isActive }) => (isActive ? Style.active : "")}>Ready to Ship</NavLink>
        <NavLink to="/design_solution" className={({ isActive }) => (isActive ? Style.active : "")}>Design Solution</NavLink>
        <NavLink to="/Bfurniture" className={({ isActive }) => (isActive ? Style.active : "")}>Bespoke Furniture</NavLink>

      </div>
      <Link to="/wishlist"><HeartIcon className="w-12 h-12 text-[#9C0300]"/></Link>
      
      {/* Show Username & Logout if Logged In, Otherwise Show Login */}
      {!user ? (
        <button className={Style.login_button} onClick={() => navigate("/login")}>Login</button>
      ) : (
        <div className={Style.user_menu}>
          <span className={Style.username}>Hello, {user.username}</span>
          <button className={Style.logout_button} onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
