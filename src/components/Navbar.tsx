import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="navbar">
      <h2>MyApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {isLoggedIn && <Link to="/logout">Logout 🔓</Link>}
      </div>
    </div>
  );
};

export default Navbar;

