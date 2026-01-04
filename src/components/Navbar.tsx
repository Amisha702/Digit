import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
