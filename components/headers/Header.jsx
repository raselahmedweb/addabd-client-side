'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

//images
import logo from "@/public/logo/ADDABD.svg";
import profile2 from "@/public/images/profile.jpg";
//icons
import IconHome from "@/components/headers/icons/IconHome";
import IconSearch from "./icons/IconSearch";
import IconPeople from "./icons/IconPeople";
import IconMessenger from "./icons/IconMessenger";
import IconPlus from "./icons/IconPlus";
import IconNotification from "./icons/IconNotification";

export default function Header() {
  const router = useRouter();
  const goProfile = () => {
    router.push("/profile");
  };

  
  // usiLocation hook will be use to give menu class based on route 
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
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center lg:w-3/12">
            <Link href="https://raseldev.com" className="flex">
              <Image src={logo} className="w-32" alt="FlowBite Logo" />
            </Link>
            <form action="#" method="GET" className="hidden ms-3 lg:block">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-70">
                <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="btn-primary rounded-lg"
                  placeholder="Search"
                />
              </div>
            </form>
            
          </div>
          <div className="hidden lg:inline w-6/12">
            <ul className="flex justify-center items center space-x-16">
              <li className={`${menuClass("/")}`}>
                <Link
                  href="/"
                  className={`flex items-center focus:outline-none`}
                >
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
            </ul>
          </div>
          <div className="flex items-center lg:order-2 lg:w-3/12 justify-end">
            <button
              type="button"
              className="hidden lg:inline p-2 text-center align-middle mr-1 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-red-700 focus:ring-4 focus:ring-red-950"
            >
              <IconPlus />
            </button>

            <div className="ms-2 flex justify-center items-center lg:hidden rounded-full">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-center align-middle mr-1 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-red-700 focus:ring-4 focus:ring-red-950"
              >
                <span className="sr-only">Search</span>

                <IconSearch />
              </button>
            </div>

            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="hidden lg:inline p-2 text-center align-middle mr-1 text-gray-500 border-b-2 border-red-600 h-8 w-8 justify-center items-center"
            >
              <span className="sr-only">View notifications</span>

              <IconNotification />
            </button>

            <button
              type="button"
              className="hidden lg:flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-red-950 dark:focus:ring-red-950"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              onClick={goProfile}
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src={profile2}
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
