"use client";

import { useState, useRef, useEffect } from "react";
import apiReq from "../api/axios";
import { useAuth } from "../auth/AuthProvider";

const OTP = () => {
  const { isLoading, setIsLoading, isLoggedIn, setIsLoggedIn } = useAuth();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // To store OTP values
  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]; // Refs for input elements

  const [timeLeft, setTimeLeft] = useState(120); // Countdown timer (in seconds)
  const [isExpired, setIsExpired] = useState(false); // To track if the OTP has expired

  // Countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); // Decrease the time left by 1 second
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    } else {
      setIsExpired(true); // Mark as expired when countdown reaches 0
    }
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    // Update the OTP state
    setOtp(newOtp);

    // If the input is filled, move focus to the next input
    if (e.target.value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    // If the user presses backspace and the current input is empty, focus on the previous input
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleVerifyOtp = () => {
    const postData = () => {
      setIsLoading(true);
      apiReq({
        endPoint: "otp",
        method: "post",
        data: JSON.stringify({
          otp: otp.join(""),
          emailLocal: JSON.parse(localStorage.getItem("email")),
        }),
      })
        .then((res) => {
          console.log(res);
          setIsLoggedIn(res?.data?.otp_var);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);

        });
    };
    postData();
    // Log the OTP value to the console when the button is clicked
    console.log("OTP Entered:", otp.join("")); // Join the array to display the OTP as a single string
  };

  return (
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="relative md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
          <div className="flex-row justify-center items-center space-y-6">
            <div>
              <h3 className="text-center text-3xl font-bold">
                OTP Verification
              </h3>
            </div>
            <div>
              <p className="text-center">
                Enter the OTP you received to{" "}
                <span className="text-blue-600">user@example.com</span>
              </p>
            </div>
            <div className="flex space-x-2 justify-center">
              {otpRefs.map((ref, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  ref={ref}
                  className="w-12 h-12 text-center text-xl bg-slate-700 border border-slate-500 rounded-md leading-tight focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                />
              ))}
            </div>

            <div className="text-center">
              <button
                type="button" // Prevent form submission
                onClick={handleVerifyOtp} // Call handleVerifyOtp function when the button is clicked
                className="w-full sm:w-auto text-center text-white bg-blue-700 border border-blue-700 rounded-md py-2 px-4 hover:bg-blue-800 focus:outline-none focus:border-blue-800"
              >
                {isLoading ? "Varifying..." : "Verify OTP"}
              </button>
            </div>
            <div className="text-center">
              <p>
                {isExpired ? (
                  <>
                    Didn't receive the code?{" "}
                    <button className="text-blue-600">Resend now</button>
                  </>
                ) : (
                  <>
                    Didn't receive the code?{" "}
                    <span className="text-red-600">{`Resend in (${Math.floor(
                      timeLeft / 60
                    )}:${(timeLeft % 60).toString().padStart(2, "0")})`}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
