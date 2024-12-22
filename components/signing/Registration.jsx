"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import IconApple from "@/components/signing/icons/IconApple";
import IconGoogle from "@/components/signing/icons/IconGoogle";
import apiReq from "../api/axios";
import PopupOtp from "./PopupOtp";
import PopupLogin from "./PopupLogin";

const Registration = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isOtpVarified,
    setIsOtpVarified,
    otpVarRequired,
    isLoading,
    setIsLoading,
    setOtpVarRequired,
    popup,
    setPopup,
  } = useAuth();
  // State to hold the checked status of the registration
  const [isChecked, setIsChecked] = useState(false);
  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Set state based on checkbox state
  };

  // State to hold the name
  const [name, setName] = useState("");
  // Handle the change when a user types a name
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // State to hold the email
  const [email, setEmail] = useState("");
  // Handle the change when a user types an email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // State to hold the selected country
  const [username, setUserName] = useState("");
  // Handle the change when a user selects a country
  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  // State to hold the password
  const [password, setPassword] = useState("");
  // Handle the change when a user types a password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // State to hold error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const submitRegistration = (e) => {
    e.preventDefault();

    if (
      name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      username.length == 0
    ) {
      setErrorMessage("All fields required value.");
    } else if (!isChecked) {
      setErrorMessage("Please Check terms and privacy.");
    } else {
      const postData = () => {
        setIsLoading(true);
        apiReq({
          endPoint: "register",
          method: "post",
          data: JSON.stringify({
            name,
            email,
            password,
            username,
          }),
        })
          .then((res) => {
            console.log(res);
            if (res?.data?.otp_var == false && res?.data?.register == true) {
              setOtpVarRequired(true);
            }
          })
          .catch((err) => {
            if (
              err?.response?.data?.otp_var == false &&
              err?.response?.data?.register == true &&
              err?.status == 409
            ) {
              localStorage.setItem("email", JSON.stringify(err?.response?.data?.email));
              setPopup("openOtpPopup");
            }
            if (
              err?.response?.data?.otp_var == true &&
              err?.response?.data?.register == true &&
              err?.status == 409
            ) {
              localStorage.setItem("email", err?.response?.data?.email);
              setPopup("openLoginPopup");
            }
            setErrorMessage(err?.response?.data?.message);
            console.log(err);
          })
          .finally(() => setIsLoading(false));
      };
      postData();
    }
  };

  return (
    <>
      <div className="px-0 lg:px-6">
        <div className="my-5">
          <div className="relative md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
            <form onSubmit={submitRegistration}>
              <div className="mb-5">
                <h3 className="font-bold text-2xl text-white mb-3">AddaBD</h3>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <button className="w-full sm:w-1/2 delay-100 flex items-center border-solid border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white border rounded-lg py-2 justify-center">
                  <IconGoogle />{" "}
                  <span className="ms-2 font-bold ">Sign up with Google</span>
                </button>
                <button className="w-full sm:w-1/2 delay-100 flex items-center border-solid border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white border rounded-lg py-2 justify-center">
                  <span className="text-white inline-block">
                    <IconApple />
                  </span>{" "}
                  <span className="ms-2 font-bold inline-block">
                    Sign up with Apple
                  </span>
                </button>
              </div>
              <div className="flex items-center my-5">
                <div className="flex-1">
                  <hr className="border-slate-700 border" />
                </div>
                <span className="mx-4 text-gray-400 font-bold text-xl">or</span>
                <div className="flex-1">
                  <hr className="border-slate-700 border" />
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full mb-5">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="bg-slate-700 border border-slate-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={handleNameChange}
                  />
                </div>
                <div className="w-full mb-5">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-slate-700 border border-slate-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="w-full mb-5">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="bg-slate-700 border border-slate-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="w-full mb-5">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-slate-700 border border-slate-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    id="password"
                    type="password"
                    placeholder="Write a strong password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-start space-x-2 mb-5">
                  <input
                    type="checkbox"
                    id="subscribeCheckbox"
                    name="subscribe"
                    checked={isChecked} // Bind the checkbox state
                    onChange={handleCheckboxChange} // Update state on change
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <p className="text-gray-300 text-sm">
                    By signing up, you are creating a AddaBD account, and you
                    agree to AddaBD’s
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      {" "}
                      Terms of Use{" "}
                    </a>
                    and
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <div className="mb-5 w-full">
                  {errorMessage && (
                    <p className="text-red-600 text-center font-semibold">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-blue-600 rounded p-2 w-full text-white font-semibold"
                  >
                    {isLoading ? "Please waite..." : "Create an account"}
                  </button>
                </div>
                <div>
                  <p className="text-gray-500 text-center">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Sign in here
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {popup && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        {popup === "openOtpPopup" && <PopupOtp />}
        {popup === "openLoginPopup" && <PopupLogin />}
      </div>}
    </>
  );
};

export default Registration;
