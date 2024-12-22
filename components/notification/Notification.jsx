"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import profile from "@/public/images/jese-leos.png";
import { useAuth } from "../auth/AuthProvider";


function Notification() {

  const {notificationToggler} = useAuth();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${!notificationToggler && "hidden"}`}>
    <div className={`fixed top-16 end-0 w-full lg:w-3/12 h-screen z-10 duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-16"}`}>
      <div>
        <div className="relative w-full m-auto bg-white text-black dark:bg-black dark:text-white p-5 rounded-md shadow">
          <div className="notification m-auto bg-black h-screen top-0">
            <h2 className="text-2xl font-bold mb-3">Notifications</h2>
            <div className="flex-row space-y-3">
          
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-full flex justify-start items-start space-x-2"
            >
              <div className="w-10">
                <Image className="rounded-full" src={profile} alt="profile" />
              </div>
              <div>
                <span className="text-lg me-2">Rasel Ahmed</span>
                <span className="font-thin text-xs">10h</span>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>)
  ;
}

export default Notification;
