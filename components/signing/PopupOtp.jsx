"use client";

import { useAuth } from "../auth/AuthProvider";
import IconClose from "../headers/icons/IconClose";

const PopupOtp = () => {
  const {setPopup, setOtpVarRequired }=useAuth();
  return (
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="relative w-80 m-auto bg-white text-black dark:bg-black dark:text-white p-5 pt-10 rounded-md shadow text-center">
            <button onClick={()=>setPopup("")} className="absolute top-0 end-0 m-2">
              <IconClose/>
            </button>
            <p>This email or username already registered, only OTP varification required.</p>
            <button onClick={()=>setOtpVarRequired(true)} className="mt-5 bg-blue-600 rounded p-2 w-full text-white font-semibold">Go to Otp varification</button>
        </div>
      </div>
    </div>
  );
};

export default PopupOtp;
