"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import IconHome from "./icons/IconHome";
import IconPeople from "./icons/IconPeople";
import IconMessenger from "./icons/IconMessenger";
import IconNotification from "./icons/IconNotification";


import profile from "@/public/images/profile.jpg";


const HeadersBottom = () => {
  const router = useRouter();
  const goProfile = () => {
    router.push("/profile");
  };

  const pathname = usePathname();

  const menuClass = (path) => {
    return pathname == path? "border-b-2 border-red-600 h-8 w-8 flex justify-center items-center":"";
  }

  
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
    <div className={`lg:hidden fixed bottom-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <nav className="bg-white border-gray-200 lg:px-6 py-2.5 dark:bg-black">
      <ul className="flex justify-center items-center space-x-8">
        <li className={`${menuClass("/")}`}>
          <Link href="/">
            <IconHome />
          </Link>
        </li>
        <li className={`${menuClass("/freinds")}`}>
          <Link href="/freinds">
            <IconPeople />
          </Link>
        </li>
        <li className={`${menuClass("/chat")}`}>
          <Link href="/chat">
            <IconMessenger />
          </Link>
        </li>
        <li>
          <Link href="#">
          <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="text-center align-middle text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-red-700 focus:ring-4 focus:ring-red-950"
            >
              <span className="sr-only">View notifications</span>

              <IconNotification />
            </button>
          </Link>
        </li>
        <li>
          
          <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-red-950 dark:focus:ring-red-950"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              onClick={goProfile}
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src={profile}
                alt="user photo"
              />
            </button>
          
        </li>
      </ul>
      </nav>
      
    </div>
  );
};

export default HeadersBottom;
