import { useNavigate } from "react-router-dom";

type LoginProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/");
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


