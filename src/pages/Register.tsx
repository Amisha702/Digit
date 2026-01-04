function Register() {
  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      <h1>Create Account</h1>

      <label>Username</label>
      <input type="text" placeholder="Username" />

      <br /><br />

      <label>Email</label>
      <input type="email" placeholder="Email" />

      <br /><br />

      <label>Password</label>
      <input type="password" placeholder="Password" />

      <br /><br />

      <button>Sign Up</button>
    </div>
  );
}

export default Register;
