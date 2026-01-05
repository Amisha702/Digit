import { useNavigate } from "react-router-dom";

function RemoveAccount() {
  const navigate = useNavigate();

  const handleRemove = () => {
    localStorage.clear(); // remove all stored data
    alert("Account removed successfully");
    navigate("/register");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Remove Account</h1>
      <p>This action cannot be undone.</p>

      <button onClick={handleRemove} style={{ color: "red" }}>
        Delete My Account
      </button>
    </div>
  );
}

export default RemoveAccount;
