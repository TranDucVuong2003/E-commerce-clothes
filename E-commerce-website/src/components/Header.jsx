import React, { useContext, useState } from "react";
import SearchIcon from "../assets/Icon/SearchIcon";
import CartIcon from "../assets/Icon/CartIcon";
import UserIcon from "../assets/Icon/UserIcon";
import { Link, useNavigate } from "react-router";
import LogOutIcon from "../assets/Icon/LogOutIcon";
import { AppContext } from "../Context/ContextData";

function Header() {
  const [search, setSearch] = useState("");
  const [isShowSearchSuggestions, setIsShowSearchSuggestions] = useState(false);
  const [displayUsser, setDisplayUsser] = useState(false);

  const { setIsAuth } = useContext(AppContext);
  const navigate = useNavigate();

  const toggle = () => {
    setDisplayUsser(!displayUsser);
  };

  const handleLogOut = () => {
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
    navigate("/login");
  };

  const handleLogoClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white shadow-md h-[96px] ">
      <div className="container py-6">
        <div className="flex h-[48px] items-center justify-between">
          <Link
            to={"/"}
            onClick={handleLogoClick}
            className="font-bold text-[24px] md:text-[32px] leading-10 cursor-pointer font-[Integral]"
          >
            SHOP.CO
          </Link>
          <div className="flex items-center text-[14px] md:text-[16px] leading-6 font-normal gap-4 md:gap-10">
            <ul className="hidden md:flex items-center gap-4 md:gap-6">
              <Link to="shop" className="cursor-pointer relative group">
                Shop
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link to="shop" className="cursor-pointer relative group">
                On Sale
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link to="shop" className="cursor-pointer relative group">
                New Arrivals
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link to="shop" className="cursor-pointer relative group">
                Brands
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </ul>

            <div className="flex items-center relative bg-[#F0F0F0] rounded-3xl pl-3 md:pl-5 h-[36px] md:h-[48px] w-[200px] md:w-[400px] lg:w-[567px]">
              <SearchIcon />
              <input
                onFocus={() => setIsShowSearchSuggestions(true)}
                onBlur={() => setIsShowSearchSuggestions(false)}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                type="text"
                className="placeholder:font-light bg-transparent pl-2 focus:outline-none w-full"
              />
              {isShowSearchSuggestions && (
                <div className="text-black absolute bg-white shadow-2xl top-12 rounded-lg min-h-52 w-[95%] p-4">
                  <h1>Search for {search}:</h1>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 md:gap-[14px]">
              <Link to={"cart"}>
                <CartIcon />
              </Link>
              <div className="relative" onClick={() => toggle()}>
                <UserIcon />
                {/* {displayUsser && ( */}
                <div
                  className={`absolute right-[-8px] top-[38px] bg-[#f5f1f1] rounded-lg p-3 transition-all duration-500 ease-in-out overflow-hidden shadow-lg transform ${
                    displayUsser
                      ? "max-h-[130px] opacity-100 scale-y-100"
                      : "max-h-0 opacity-0 scale-y-0"
                  } w-[130px] origin-top`}
                >
                  <ul className="flex flex-col gap-1">
                    <li className="cursor-pointer hover:bg-slate-200 p-1 hover:rounded-lg">
                      Profile
                    </li>
                    <li
                      onClick={() => handleLogOut()}
                      className="flex gap-2 cursor-pointer hover:bg-slate-200 p-1 hover:rounded-lg"
                    >
                      <span>Log out</span>
                      <LogOutIcon />
                    </li>
                  </ul>
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
