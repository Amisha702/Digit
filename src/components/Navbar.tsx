import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <nav style={{ padding: 10 }}>
      <Link to="/">Home</Link>{" | "}

      {!isAuthenticated && (
        <>
          <Link to="/login">Login</Link>{" | "}
          <Link to="/register">Register</Link>{" | "}
        </>
      )}

      {isAuthenticated && (
        <>
          <Link to="/dashboard">Dashboard</Link>{" | "}
          <Link to="/remove-account">Remove Account</Link>{" | "}
          <Link to="/logout">Logout</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
