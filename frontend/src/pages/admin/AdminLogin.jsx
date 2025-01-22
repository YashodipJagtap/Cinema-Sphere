import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Validate email, password, and admin key
    if (email !== "yashodipjagtap44@gmail.com" || pwd !== "pwd" || adminKey !== "admin") {
      setError("Invalid credentials. Access restricted.");
      return;
    }

    try {
      // Simulate a successful login response
      const data = { success: true };

      if (data.success) {
        // Login successful: store admin status and redirect
        localStorage.setItem("isAdmin", "true");
        navigate("/"); // Redirect to home page on successful login
      } else {
        setError("Login failed. Check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="login-box">
          <h3 className="login-title">Admin Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setAdminKey(e.target.value)}
                value={adminKey}
                required
                type="text"
                placeholder="Admin Key"
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
