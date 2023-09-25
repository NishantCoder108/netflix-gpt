import React, { useRef, useState } from "react";
import { loginValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { auth, getErrorMessageFromFirebaseErrorCode } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleSignIn = () => {
    const message = loginValidation(
      email.current?.value,
      password.current?.value,
      userName.current?.value
    );

    setErrorMessage(message);

    if (message) return;

    //TODO : Sign in && Sign up Logic

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log({ userCredential });
          updateProfile(auth.currentUser, {
            displayName: userName.current?.value,
          });
        })
        .catch((error) => {
          console.log({ error });
          const errorCode = error.code;
          const customMessage = getErrorMessageFromFirebaseErrorCode(errorCode);

          setErrorMessage(customMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log({ userCredential });
        })
        .catch((error) => {
          const errorCode = error.code;
          const customMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
          console.log({ error });
          setErrorMessage(customMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 flex items-center justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[28rem] py-16 px-20 bg-black rounded-md bg-opacity-80"
          autoComplete="off"
          noValidate
        >
          <h2 className="py-2 text-white text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignIn && (
            <input
              required
              ref={userName}
              className="py-3 px-2 my-3 w-full border bg-gray-700 border-none text-white rounded-md outline-slate-200 "
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            required
            type="email"
            className="py-3 px-2 my-3 w-full border bg-gray-700 border-none text-white rounded-md outline-slate-200"
            placeholder="Email Address"
          />
          <input
            required
            ref={password}
            type="text"
            className="py-3 px-2 mt-3 w-full border bg-gray-700 border-none text-white rounded-md outline-slate-200"
            placeholder="Password"
          />
          <span className="text-gray-100 text-[.5rem]">
            Specify: 1 uppercase, 1 lowercase, 1 digit, 1 special
            (@,$,!,%,*,?,&), 8+ characters.
          </span>
          <p className="text-[red] text-sm">{errorMessage} </p>

          <button
            onClick={handleSignIn}
            className="py-3 my-8 px-4 w-full text-white bg-[#d9232e] rounded-md font-bold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-8 ">
            <span className="text-gray-500">
              {isSignIn ? "New to Netflix ?" : "Already Registered ?"}{" "}
            </span>
            <span
              className="cursor-pointer  hover:underline"
              onClick={toggleSignIn}
            >
              {isSignIn ? "Sign up" : "Sign In"} now.
            </span>
          </p>
          <p className="text-gray-500 mt-3  text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot ,
            <span className="text-blue-500 cursor-pointer hover:underline">
              Learn more.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
