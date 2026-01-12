import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAllCookies } from "../utils/clearCookies";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (email !== parsedUser.email || password !== parsedUser.password) {
      alert("Invalid credentials");
      return;
    }

    clearAllCookies();

    localStorage.setItem("auth", "true");

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;



