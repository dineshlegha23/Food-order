import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useUserContext } from "../context/context";

const Navbar = () => {
  const { cartItems } = useUserContext();
  const [link, setLink] = useState("home");
  const [isLogin, setIsLogin] = useState("Login");
  const [showLogin, setShowLogin] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const termsRef = useRef();

  function handleLogin() {
    console.log(
      `Type: ${isLogin}  
      Email: ${emailRef.current.value} 
      Password: ${passwordRef.current.value}
      ${isLogin === "SignUp" ? `User Name: ${nameRef.current?.value}` : ""} 
    `
    );
  }

  return (
    <>
      <div className="flex justify-between p-5 mx-auto max-w-[1200px]">
        <div className="">
          <img src={assets.logo} alt="logo" />
        </div>
        <ul className="flex gap-8 font-semibold md:hidden">
          <li
            onClick={() => setLink("home")}
            className={`cursor-pointer hover:text-gray-500 ${
              link === "home" ? "border-b-[2px] mb-2 border-black" : ""
            }`}
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            onClick={() => setLink("menu")}
            className={`cursor-pointer hover:text-gray-500 ${
              link === "menu" ? "border-b-[2px] mb-2 border-black" : ""
            }`}
          >
            <a href="#menu">menu</a>
          </li>
          <li
            onClick={() => setLink("mobile app")}
            className={`cursor-pointer hover:text-gray-500 ${
              link === "mobile app" ? "border-b-[2px] mb-2 border-black" : ""
            }`}
          >
            <a href="#mobile-app">mobile app</a>
          </li>
          <li
            onClick={() => setLink("contact us")}
            className={`cursor-pointer hover:text-gray-500 ${
              link === "contact us" ? "border-b-[2px] mb-2 border-black" : ""
            }`}
          >
            <a href="#contact">contact us</a>
          </li>
        </ul>
        <div className="flex gap-8 items-center">
          <div>
            <img src={assets.search_icon} alt="search icon" />
          </div>
          <div className="relative">
            <NavLink to={"/cart"}>
              <img
                src={assets.basket_icon}
                alt="basket icon"
                onClick={() => setLink("cart")}
                className={`${link === "cart" ? "scale-110" : ""}`}
              />
              <i
                className={`${
                  cartItems.length > 0
                    ? "absolute w-3 h-3 rounded-full bg-orange-400 top-[-25%] right-[-30%]"
                    : ""
                }`}
              ></i>
            </NavLink>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            sign in
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="z-10 fixed w-full top-0 h-screen bg-black/20 flex items-center justify-center">
          <div className="z-20 bg-white w-[400px] px-5 py-2 rounded-lg">
            <div className="flex justify-between mb-5">
              <div className="text-xl font-semibold">{isLogin}</div>
              <button className="text-xl" onClick={() => setShowLogin(false)}>
                X
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {isLogin === "SignUp" && (
                <input
                  type="text"
                  placeholder="Your name"
                  ref={nameRef}
                  className="border-black/50 px-2 border-[1px] rounded-md py-[6px]"
                />
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                ref={emailRef}
                className="border-black/50 px-2 border-[1px] rounded-md py-[6px]"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                className="border-black/50 px-2 border-[1px] rounded-md py-[6px]"
              />
              <button
                onClick={() => handleLogin()}
                className="bg-orange-600 py-[7px] rounded-md text-white"
              >
                {isLogin === "Login" ? "Login" : "Create account"}
              </button>
            </div>
            <div className="flex gap-2 mt-5 text-[13px] leading-4">
              <input type="checkbox" name="terms" id="terms" ref={termsRef} />
              <label htmlFor="terms">
                By continuing, I agree to the terms of use & privacy policy
              </label>
            </div>
            <div className="mt-5 mb-2">
              {isLogin === "Login" ? (
                <div>
                  <span>
                    Don't have an account?{" "}
                    <button
                      className="text-orange-500"
                      onClick={() => setIsLogin("SignUp")}
                    >
                      Sign up
                    </button>
                  </span>
                </div>
              ) : (
                <div>
                  <span>
                    Already have an account?{" "}
                    <button
                      className="text-orange-500"
                      onClick={() => setIsLogin("Login")}
                    >
                      Login
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
