import { useState } from "react";
import { saveUser } from "../api"; // ✅ correct import

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.username || !form.email || !form.password) {
      alert("All fields required");
      return;
    }

    // duplicate check
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === form.email);

    if (exists) {
alert("Email already exists ❌");
      return;
    }

    // save user
    saveUser(form);

    alert("Registered successfully ✅");

    // clear form
    setForm({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
