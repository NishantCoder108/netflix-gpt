import React from "react";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
