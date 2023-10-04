import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, signInUser } from "../utils/userSlice";

const Header = () => {
  const photoURL = useSelector((state) => state.user?.userDetails?.photoURL);
  const accessToken = useSelector(
    (state) => state.user?.userDetails?.accessToken
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log({ error });
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("USER AUTH", { user });
        const {
          email,
          displayName,
          emailVerified,
          photoURL,
          phoneNumber,
          uid,
          accessToken,
        } = user;

        dispatch(
          signInUser({
            email,
            displayName,
            emailVerified,
            photoURL,
            phoneNumber,
            uid,
            accessToken,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(logOutUser());
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between bg-gradient-to-b   from-black to-transparent items-center py-2 px-8 ">
        <img className="w-52" src="netflix-logo.png" alt="Netflix logo" />
        {accessToken && (
          <div className="flex items-center">
            <img
              className="w-10"
              src={photoURL ? photoURL : "defaultUser.png"}
              alt="Default User Logo"
            />
            <button
              className="cursor-pointer bg-slate-100  px-4  py-[.5rem]  hover:bg-slate-600 hover:text-white text-slate-600"
              onClick={handleLogOut}
            >
              Logout
            </button>
            <pre>{process.env.REACT_APP_ACCESS_KEY}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
