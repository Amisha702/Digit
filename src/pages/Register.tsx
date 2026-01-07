import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!form.terms) {
      alert("Please agree to Terms & Conditions");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister} className="register-form">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* ✅ TERMS CHECKBOX */}
        <div className="terms-container">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms">I agree to Terms & Conditions</label>
        </div>

        <button type="submit" disabled={!form.terms}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;


