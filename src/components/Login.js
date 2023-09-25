import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <div className="absolute  bg-gradient-to-b w-full  from-black to-transparent py-2 px-8 ">
        <img className="w-52" src="netflix-logo.png" alt="netflix logo" />
      </div>
      <div className="h-[100vh]">
        <img
          className="w-full h-full inset-0 opacity-99"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="home bg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <form className="w-[28rem] py-16 px-20 bg-black rounded-md bg-opacity-80">
          <h2 className="py-2 text-white text-3xl">
            {" "}
            {isSignIn ? "Sign In" : "Sign Up"}{" "}
          </h2>
          {!isSignIn && (
            <input
              className="py-3 px-2 my-3 w-full border rounded-md outline-slate-200 "
              placeholder="Full Name"
            />
          )}
          <input
            className="py-3 px-2 my-3 w-full border rounded-md outline-slate-200 "
            placeholder="Email Address"
          />
          <input
            className="py-3 px-2 my-3 w-full border rounded-md outline-slate-200 "
            placeholder="Password"
          />

          <button className="py-3 my-8 px-4 w-full text-white bg-red-700 rounded-md font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-8 ">
            <span className="text-gray-500">
              {" "}
              {isSignIn ? "New to Netflix ?" : "Already Registered ?"}{" "}
            </span>
            <span
              className="cursor-pointer  hover:underline"
              onClick={handleSignIn}
            >
              {isSignIn ? "Sign up" : "Sign In"} now.
            </span>
          </p>
          <p className="text-gray-500 mt-3  text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              {" "}
              Learn more.{" "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
