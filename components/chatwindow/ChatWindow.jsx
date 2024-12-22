"use client";

import Image from "next/image";

import profile from "@/public/images/profile.jpg";
import IconLeftAngle from "../headers/icons/IconLeftAngle";
import IconAudioCall from "../headers/icons/IconAudioCall";
import IconVideoCall from "../headers/icons/IconVideoCall";
import Link from "next/link";
import IconSend from "@/public/icons/IconSend";
import IconImage from "../headers/icons/IconImage";
function ChatWindow() {
  return (
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="relative md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow ">
          <div className="flex justify-between space-x-3 border-b pb-5 border-gray-700">
            <div className="flex justify-center items-center space-x-2">
              <button>
                <IconLeftAngle />
              </button>
              <div className="w-10 relative flex-shrink-0">
                <Image
                  className="rounded-full"
                  src={profile}
                  alt="profile image"
                />
              </div>
              <Link href="#">Rasel Ahmed</Link>
            </div>
            <div className="flex justify-end items-center space-x-4">
              <button>
                <IconAudioCall />
              </button>
              <button>
                <IconVideoCall />
              </button>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row mt-5 space-y-3 overflow-y-auto scrollable-kit h-screen">
              {[...Array(5)].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full flex justify-start items-start space-x-2"
                  >
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile}
                        alt="profile"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Rasel Ahmed</span>
                      <span className="text-sm block text-gray-400">
                        so nice
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <form className="flex items-center space-x-2">
            <input type="file" className="hidden" id="fileInput" />
        <label htmlFor="fileInput">
            <IconImage/>
        </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border-none focus:outline-none"
                  placeholder="Type a message..."
                />
                <button type="submit" className="text-sm text-white bg-blue-500 rounded-md px-3 py-2">
                  <IconSend/>
                </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
