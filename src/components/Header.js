import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOutUser());

        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.log({ error });
      });
  };
  return (
    <div className="absolute w-full">
      <div className="flex justify-between bg-gradient-to-b   from-black to-transparent items-center py-2 px-8 ">
        <img className="w-52" src="netflix-logo.png" alt="Netflix logo" />
        <div className="flex items-center">
          <img className="w-10" src="defaultUser.png" alt="Default User Logo" />
          <button
            className="cursor-pointer py-3 px-6 hover:bg-slate-600"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
