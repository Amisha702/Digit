import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const clearAllCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie =
      name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  });
};

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    clearAllCookies();
    localStorage.clear();
    sessionStorage.clear();
    navigate("/register");
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;


