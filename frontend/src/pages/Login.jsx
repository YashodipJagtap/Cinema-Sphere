import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from '../helper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  // Initialize the navigate hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${api_base_url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pwd }),
      });

      const data = await res.json();
      console.log("Login response:", data); // Debugging: Check API response

      if (res.ok && data.success) {
        // Store user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("isLoggedIn", true);

        console.log("Login successful"); // Debugging: Verify successful login
      } else if (data.msg === "User not found") {
        setError("User not found. Please sign up first.");
      } else {
        setError("Incorrect password, please try again.");
      }
    } catch (err) {
      console.error("Network error:", err); // Debugging: Check network error
      setError("Network error. Please try again later.");
    } finally {
      // Redirect to home page after either success or failure
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container w-screen min-h-screen flex flex-col items-center justify-center bg-[#09090B] text-white">
        <div className="w-[23vw] bg-[#18181B] h-[auto] flex flex-col p-[20px] shadow-black/50 rounded-lg">
          <h3 className='text-2xl mb-3'>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className='inputBox mt-3'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder='Email'
              />
            </div>
            <div className='inputBox mt-3'>
              <input
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                type="password"
                placeholder='Password'
              />
            </div>
            <p className='mb-1 mt-2 text-[14px]'>
              Don't have an account? <Link className='text-[#1D4ED8]' to="/signUp">Sign Up</Link>
            </p>
            <p className='mb-3 text-red-500'>{error}</p>
            <button type="submit" className='btnBlue w-full text-[15px]'>Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
