"use client";

import Image from "next/image";
import profile2 from "@/public/images/jese-leos.png";
import IconMore from "@/public/icons/IconMore";
import { useState } from "react";

function page() {
  const [freindsTab, setFreindsTab] = useState("all");

  return (
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
          <div className="flex-row">
            <div>
              <ul className="flex items-center justify-between text-xs md:text-base">
                <li>
                  <button
                    onClick={() => setFreindsTab("all")}
                    className={`${
                      freindsTab == "all" ? "bg-gray-200 dark:bg-gray-600" : ""
                    } rounded-xl px-2 py-1 hover:bg-gray-200 hover:dark:bg-gray-600`}
                  >
                    All Freinds
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setFreindsTab("request")}
                    className={`${
                      freindsTab == "request"
                        ? "bg-gray-200 dark:bg-gray-600"
                        : ""
                    } rounded-xl px-2 py-1 hover:bg-gray-200 hover:dark:bg-gray-600`}
                  >
                    Freind Requests
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setFreindsTab("suggestions")}
                    className={`${
                      freindsTab == "suggestions"
                        ? "bg-gray-200 dark:bg-gray-600"
                        : ""
                    } rounded-xl px-2 py-1 hover:bg-gray-200 hover:dark:bg-gray-600`}
                  >
                    Freind Suggestions
                  </button>
                </li>
              </ul>
            </div>
            <div className="mt-5 border-t border-gray-500">
              {/* All freinds code satrt */}
              <div
                className={`${
                  freindsTab == "all"
                    ? "flex flex-wrap space-y-3 mt-3"
                    : "hidden"
                }`}
              >
                <div className="w-full">
                  <div className="border border-gray-500 p-5 rounded-lg flex justify-between items-center">
                    <div className="flex justify-start items-center space-x-2">
                      <div className="w-10">
                        <Image
                          className="rounded-full"
                          src={profile2}
                          alt="Friends list"
                        />
                      </div>
                      <div>
                        <span className="text-lg me-2">Rasel Ahmed</span>
                      </div>
                    </div>
                    <div>
                      <IconMore />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="border border-gray-500 p-5 rounded-lg flex justify-between items-center">
                    <div className="flex justify-start items-center space-x-2">
                      <div className="w-10">
                        <Image
                          className="rounded-full"
                          src={profile2}
                          alt="Friends list"
                        />
                      </div>
                      <div>
                        <span className="text-lg me-2">Rasel Ahmed</span>
                      </div>
                    </div>
                    <div>
                      <IconMore />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="border border-gray-500 p-5 rounded-lg flex justify-between items-center">
                    <div className="flex justify-start items-center space-x-2">
                      <div className="w-10">
                        <Image
                          className="rounded-full"
                          src={profile2}
                          alt="Friends list"
                        />
                      </div>
                      <div>
                        <span className="text-lg me-2">Rasel Ahmed</span>
                      </div>
                    </div>
                    <div>
                      <IconMore />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="border border-gray-500 p-5 rounded-lg flex justify-between items-center">
                    <div className="flex justify-start items-center space-x-2">
                      <div className="w-10">
                        <Image
                          className="rounded-full"
                          src={profile2}
                          alt="Friends list"
                        />
                      </div>
                      <div>
                        <span className="text-lg me-2">Rasel Ahmed</span>
                      </div>
                    </div>
                    <div>
                      <IconMore />
                    </div>
                  </div>
                </div>
              </div>
              {/* All freinds code ends */}

              {/* Freinds request code start */}
              <div
                className={`${
                  freindsTab == "request"
                    ? "flex flex-wrap justify-between items-center mt-3 space-y-3"
                    : "hidden"
                }`}
              >
                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Rasel Ahmed</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Accept Request
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Delete Request
                    </button>
                  </div>
                </div>
                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Rasel Ahmed</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Accept Request
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Delete Request
                    </button>
                  </div>
                </div>

                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Rasel Ahmed</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Accept Request
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Delete Request
                    </button>
                  </div>
                </div>

                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Rasel Ahmed</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Accept Request
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Delete Request
                    </button>
                  </div>
                </div>
              </div>
              {/* Freinds request code ends */}

              {/* Friends suggestion code start */}
              <div
                className={`${
                  freindsTab == "suggestions"
                    ? "flex flex-wrap justify-between items-center mt-3 space-y-3"
                    : "hidden"
                }`}
              >
                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Bashir Miah</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Add Friend
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Bashir Miah</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Add Friend
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Bashir Miah</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Add Friend
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="w-full border border-gray-500 p-5 rounded-lg flex-row space-y-3">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="w-10">
                      <Image
                        className="rounded-full"
                        src={profile2}
                        alt="Friends list"
                      />
                    </div>
                    <div>
                      <span className="text-lg me-2">Bashir Miah</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="bg-green-700 rounded-lg p-2 text-xs">
                      Add Friend
                    </button>
                    <button className="bg-red-600 rounded-lg p-2 text-xs">
                      Remove
                    </button>
                  </div>
                </div>
                
              </div>
              {/* Friends suggestion code ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
