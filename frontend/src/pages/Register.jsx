import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("All fields required ❌");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      alert("Email already exists ❌");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully ✅");

    setForm({
      username: "",
      email: "",
      password: "",
    });

    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            style={styles.input}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

// 🔥 INLINE STYLES
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
