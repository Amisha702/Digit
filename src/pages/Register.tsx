import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAllCookies } from "../utils/clearCookies";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    // 💾 Save user data (simulate backend)
    localStorage.setItem("user", JSON.stringify(formData));

    // 🔐 Clear cookies
    clearAllCookies();

    // ✅ Success popup
    alert("Registration successful!");

    // 🚀 Redirect to login page
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <br />

      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
};

export default Register;


