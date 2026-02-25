import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateEmail = (value) => {
    // Must contain @ and end with .com / .in / other country code
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-z]{2,})$/;
    return emailPattern.test(value);
  };

  const validatePassword = (value) => {
    // Start with capital letter
    // At least 1 number
    // At least 1 special character
    // Minimum 5 characters
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[@#$%^&*!]).{4,}$/;
    return passwordPattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    setSuccess("");

    if (!validateEmail(email)) {
      newErrors.email =
        "Invalid Email. Must contain @ and end with .com / .in / country code.";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must start with a capital letter, contain a number, a special character and be at least 5 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Form Submitted Successfully! ✅");
      setEmail("");
      setPassword("");
    }
  };

  return (
  <div className="page-container">
    <div className="form-container">
      <h2>Client-Side Form Validation</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label>Email ID:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        {/* Password */}
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>

      {success && <p className="success-message">{success}</p>}
    </div>
  </div>
);
}

export default Form;