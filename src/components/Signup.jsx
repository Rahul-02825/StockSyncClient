import React, { useState } from 'react';

const Signup = () => {
  const [hoverSide, setHoverSide] = useState(null);

  // State for Signup
  const [role, setRole] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  // State for Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { role, signupEmail, signupPassword });
    // Add validation or API call here
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", { loginEmail, loginPassword });
    // Add validation or API call here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Signup */}
      <div
        className={`w-1/2 flex flex-col justify-center items-center transition-all duration-300 ${
          hoverSide === "left" ? "bg-pink-300" : "bg-blue-300"
        }`}
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="w-2/3" onSubmit={handleSignup}>
        <select
            className="w-full p-2 mb-3 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            
            <option className="bg-blue-300" value="">Select Role</option>
            <option className="bg-blue-300" value="supplier">Supplier</option>
            <option className="bg-blue-300" value="consumer">Consumer</option>
            <option className="bg-blue-300" value="warehouse_manager">Warehouse Manager</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button className="w-full p-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Sign Up
          </button>
        </form>
      </div>

      {/* Right - Login */}
      <div
        className={`w-1/2 flex flex-col justify-center items-center transition-all duration-300 ${
          hoverSide === "right" ? "bg-pink-300" : "bg-blue-300"
        }`}
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="w-2/3" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button className="w-full p-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
