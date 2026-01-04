import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back 👋</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
