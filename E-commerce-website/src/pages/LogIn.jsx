import React, { useContext, useState } from "react";
import EyeIcon from "../assets/Icon/EyeIcon";
import EyeSlashIcon from "../assets/Icon/EyeSlashIcon";
import { AppContext } from "../Context/ContextData";
import { useNavigate } from "react-router";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [accountError, setAccountError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { accountLogIn, setIsAuth , isAuth} = useContext(AppContext);
  const navigate = useNavigate();

  const submitLogIn = (e) => {
    e.preventDefault();
    setAccountError("");
    setPasswordError("");
    if (!account.trim()) {
      setAccountError("Account is required");
    }
    if (account !== accountLogIn[0].tk) {
      setAccountError("Account is incorrect");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
    }
    if (password !== accountLogIn[0].mk) {
      setPasswordError("Password is incorrect");
    }

    if (account == accountLogIn[0].tk && password == accountLogIn[0].mk) {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      console.log('isAuth',isAuth);
      
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f6f0f0]">
      {/* Card Container */}
      <div className=" p-6 rounded-xl shadow-lg w-80 relative bg-white">
        {/* Form */}
        <div className=" ">
          <span className=" flex justify-center text-[30px] font-bold ">
            SHOP.CO
          </span>
          <form className="mt-3">
            {/* Account Input */}
            <div className="mb-4">
              <label className="block font-semibold text-sm text-gray-700">
                Account
              </label>
              <div className="relative mt-1">
                <input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 border rounded-md shadow-sm"
                  placeholder="Enter your Account"
                />
                <p className="text-red-500">{accountError}</p>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-semibold text-sm text-gray-700"
              >
                Password
              </label>
              <div className="relative w-full mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border rounded-md shadow-sm bg-transparent focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <p className="text-red-500">{passwordError}</p>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              onClick={(e) => submitLogIn(e)}
              className="w-full py-2 px-4 bg-black text-white rounded-2xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
