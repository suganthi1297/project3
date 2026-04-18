import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded.username);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <h1>Welcome {user} 🔥</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Dashboard;