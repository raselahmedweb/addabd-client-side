"use client";
import Image from "next/image";
import { useAuth } from "../auth/AuthProvider";

import IconMessage from "@/components/headers/icons/IconMessage";
import IconLove from "@/public/icons/IconLove";
import IconSend from "@/public/icons/IconSend";
import profile2 from "@/public/images/jese-leos.png";

const Comments = () => {
  const { isCommentsOpen, setIsCommentsOpen } = useAuth();

  return (
    <div
      className={`${
        isCommentsOpen ? "absolute top-0 right-0 w-full h-screen z-10" : "hidden"
      }`}
    >
      <div className="m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
        <div className="flex justify-end">
          
          <button
            onClick={() => setIsCommentsOpen(false)}
            className="text-white bg-gray-700 px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>

        <div className="flex-row space-y-3 overflow-y-auto max-h-[calc(100vh-100px)] scrollable-kit">
          
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-full flex justify-start items-start space-x-2"
            >
              <div className="w-10">
                <Image className="rounded-full" src={profile2} alt="profile" />
              </div>
              <div>
                <span className="text-lg me-2">Rasel Ahmed</span>
                <span className="font-thin text-xs">10h</span>
                <cite className="text-xs lg:text-sm block">so nice</cite>
                <button className="me-10 mt-2">
                  <IconLove />
                </button>
                <button className="">
                  <IconMessage />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <div className="w-10">
            <Image
              className="rounded-full"
              src={profile2}
              alt="profile image"
            />
          </div>
          <div className="w-full relative">
            <input
              className="btn-primary rounded-full"
              id="name"
              type="text"
              placeholder="Write a comment"
            />
            <div className="absolute right-2 bottom-1">
              <button className="ml-auto">
                <IconSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
