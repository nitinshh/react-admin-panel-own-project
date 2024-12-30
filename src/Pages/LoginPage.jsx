import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/LoginPage.css"; // External CSS for custom styles
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for hardcoded credentials (email and password)
    if (email === "admin@gmail.com" && password === "123456") {
      // Redirect to dashboard if credentials are correct
      navigate("/dashboard"); // This will redirect to the dashboard
    } else {
      // If credentials are wrong, display an alert
      toast.error("Invalid email or password");
    }

    // Commented out the login API logic
    // if (!email || !password) {
    //   toast.error("Both email and password are required!");
    //   return;
    // }
    // try {
    //   const response = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   if (response.ok) {
    //     const { token } = await response.json();
    //     localStorage.setItem("token", token);
    //     toast.success("Login successful");
    //   } else {
    //     const errorData = await response.json();
    //     toast.error(errorData.message || "Invalid credentials");
    //   }
    // } catch (error) {
    //   console.error("An error occurred", error);
    //   toast.error("An error occurred, please try again later");
    // }
  };

  return (
    <div className="login-page-container">
      {/* Left Section */}
      <div className="login-left">
        <h1 className="title">Well, hello there!</h1>
        <p className="description">
          Let the rhythm guide you.
        </p>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-box">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default LoginPage;
