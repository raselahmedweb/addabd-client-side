"use client";
import Header from "@/components/headers/Header";
import HeadersBottom from "@/components/headers/HeadersBottom";
import { useAuth } from "@/components/auth/AuthProvider";
import Notification from "@/components/notification/Notification";
import Registration from "@/components/signing/Registration";
import OTP from "@/components/signing/OTP";
import ScreenEntrySkeleton from "../skeleton/ScreenEntrySkeleton";

const InnerLayout = ({ children }) => {
  const { isLoggedIn, otpVarRequired, skeleton } = useAuth();
  return (
    <>
      {skeleton ? (
        <ScreenEntrySkeleton/>
      
      ) : (
        <div>
          {!isLoggedIn ? (
            <div>{otpVarRequired ? <OTP /> : <Registration />}</div>
          ) : (
            <div>
              <Header />
              <Notification />
              {children}
              <HeadersBottom />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InnerLayout;
