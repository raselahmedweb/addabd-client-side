import Image from "next/image";

//images
import profile2 from "@/public/images/next.png";
import IconLove from "@/public/icons/IconLove";
import IconSend from "@/public/icons/IconSend";
import CommentSection from "@/components/comments/CommentSection";




export default function Home() {

  return (
    <>
    
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="relative md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
          <div className="flex-row space-y-4">
            <div className="w-full flex justify-start items-center space-x-2">
              <div className="w-10 rounded-full overflow-hidden">
                <Image className="h-full" src={profile2} alt="profile image" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Rasel Ahmed</h3>
                <p className="font-thin text-sm">10h</p>
              </div>
            </div>
            <div className="w-full">
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <div>
              <Image className="w-full" src={profile2} alt="profile image" />
            </div>
            <div>
              <div className="flex-row space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button>
                      <IconLove />
                    </button>{" "}
                    <span className="mb-1 ms-2">46</span>
                  </div>
                  <CommentSection />
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
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
}
