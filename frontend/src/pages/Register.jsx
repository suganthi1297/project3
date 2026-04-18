import { useState } from "react";
import API from "../api";   // 🔥 connect api.jsx

function Register() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("register/", form);
      alert("Registered successfully ✅");
    } catch (error) {
      alert("Error ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
