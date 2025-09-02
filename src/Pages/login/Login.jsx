import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="border border-black bg-white rounded-md p-10">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl text-black flex justify-center items-center">
            Login to Your Account
          </h1>
          <div className="flex flex-col">
            <label htmlFor="email">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-black rounded-md w-80 h-8 pl-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-black rounded-md w-80 h-8 pl-3"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-blue-700 rounded-md hover:bg-blue-950 text-xl font-bold h-10 w-80 p-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <p>
            No account?{" "}
            <span className=" font-bold">
              {" "}
              <Link to={"/signup"}> Signup </Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
