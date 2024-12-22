'use client'

import { useState } from "react";

const Login = () => {
  // State to hold the checked status of the registration
  const [isChecked, setIsChecked] = useState(false);
  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Set state based on checkbox state
  };

  // State to hold the email
  const [email, setEmail] = useState("");
  // Handle the change when a user types an email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // State to hold the password
  const [password, setPassword] = useState("");
  // Handle the change when a user types a password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const submitRegistration = (e) => {
    e.preventDefault();
    console.log(email, password, isChecked);
  };

  return (
    <div className="md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-secondary p-5 md:p-10 rounded-md shadow">
      <form onSubmit={submitRegistration}>
        <div className="mb-5">
          <h3 className="font-bold text-2xl text-white mb-3">
            Login to your account
          </h3>
        </div>

        <div className="flex flex-wrap">
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
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-slate-700 border border-slate-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              id="password"
              type="password"
              placeholder="Write your password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex mb-5 justify-between w-full">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="subscribeCheckbox"
                name="subscribe"
                checked={isChecked} // Bind the checkbox state
                onChange={handleCheckboxChange} // Update state on change
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <p className="text-gray-300 text-sm">Remember me</p>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mb-5 w-full">
            <button
              type="submit"
              className="bg-blue-600 rounded p-2 w-full text-white font-semibold"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-gray-500 text-center">
              Don&apos;t have account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Go to Registration
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
