import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <br />
        <button>SIGN IN</button>
        <br />
        <br />
        <div>
          I have an account <Link to="/auth/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
