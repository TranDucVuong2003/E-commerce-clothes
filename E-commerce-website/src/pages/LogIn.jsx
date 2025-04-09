import React, { useContext, useState } from "react";
import EyeIcon from "../assets/Icon/EyeIcon";
import EyeSlashIcon from "../assets/Icon/EyeSlashIcon";
import { AppContext } from "../Context/ContextData";
import { useNavigate } from "react-router";
import SignInButton from "../components/SignInButton";
import ScrollReveal from "scrollreveal";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [accountError, setAccountError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { accountLogIn, setIsAuth, isAuth } = useContext(AppContext);
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
      console.log("isAuth", isAuth);

      navigate("/");
    }
  };

  const preventSpace = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const sr = ScrollReveal({
    origin: 'top',
    distance: '180px',
    duration: 2500,
    reset: true,
    opacity: 0.8
  });

  sr.reveal('.log-in', {
    reset: false
  });

  const socialProviders = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b938d459ab07f076de5460d2a50b950a2c66ae6f777acddb7252066065529b2?placeholderIfAbsent=true&apiKey=4da04f992eee41898e0913735c116203",
      text: "Sign up with Facebook",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82fa7bb389eb5aee6c646970cd1ff03f82f103d4c7e805bcaac0e2a53959c40a?placeholderIfAbsent=true&apiKey=4da04f992eee41898e0913735c116203",
      text: "Sign up with Google",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[100vh] bg-[#f6f0f0]">
      {/* Card Container */}
      <div className=" log-in p-6 rounded-xl shadow-lg w-[550px] relative bg-white h-[600px]">
        {/* Form */}
        <div className="w-full ">
          <span className=" flex justify-center text-[48px] font-bold">
            SHOP.CO
          </span>
          <form className="mt-4 w-full">
            {/* Account Input */}
            <div className="mb-4">
              <label className="block font-semibold text-xl text-gray-700">
                Account
              </label>
              <div className="relative mt-2">
                <input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  onKeyDown={preventSpace}
                  type="text"
                  className="w-full px-5 py-3 border rounded-md shadow-sm"
                  placeholder="Enter your Account"
                />
                <p className="text-red-500">{accountError}</p>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                label className="block font-semibold text-xl text-gray-700">
              
                Password
              </label>
              <div className="relative w-full mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={preventSpace}
                  className="w-full px-5 py-3 pr-10 border rounded-md shadow-sm bg-transparent "
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
              <label className="flex items-center text-xl">
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
              className="w-full py-3 px-4 bg-black text-white rounded-2xl text-xl hover:bg-[#d6d1d1] hover:text-black"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col text-lg max-w-[454px] text-zinc-800 w-full items-center justify-center mt-4 mx-auto ">
            {socialProviders.map((provider, index) => (
              <div key={index} className={index > 0 ? "mt-4 w-full " : "w-full"}>
                <SignInButton
                  icon={provider.icon}
                  text={provider.text}
                  onClick={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
