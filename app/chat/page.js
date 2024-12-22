import Image from "next/image";

import profile from "@/public/images/profile.jpg";
import ChatWindow from "@/components/chatwindow/ChatWindow";

function page() {
  return (
    <>
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="relative md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow ">
          

          <div className="flex space-x-3 border-b pb-5 border-gray-700">
          <div className="w-12 flex-shrink-0">
              <div className="z-10 bg-black w-12">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full border-2 border-green-700">
                  <span className="text-white text-sm font-bold">Chat</span>
                </div>
              </div>
            </div>
            <div className="w-full static top-0 overflow-hidden bg-black flex space-x-3 overflow-x-auto scrollable-kit">
           
            {[...Array(15)].map((_, idx) => {
              return (
                <div key={idx} className="w-10 relative flex-shrink-0">
                  <Image
                    className="rounded-full"
                    src={profile}
                    alt="profile image"
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
              );
            })}
          </div>
          </div>
          <div className="flex-row mt-5 space-y-3 overflow-y-auto scrollable-kit h-screen">
            {[...Array(15)].map((_, idx) => {
                return(
                    <div key={idx} className="w-full flex justify-start items-start space-x-2">
              <div className="w-10">
                <Image className="rounded-full" src={profile} alt="profile" />
              </div>
              <div>
                <span className="text-lg me-2">Rasel Ahmed</span>
                <span className="text-sm block text-gray-400">so nice</span>
              </div>
            </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
    <ChatWindow/>
    </>
  );
}

export default page;
