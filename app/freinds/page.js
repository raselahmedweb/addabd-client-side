import FreindsTabButton from "@/components/freindstabopen/FreindsTabButton";



function page() {

  return (
    <div className="px-0 lg:px-6">
      <div className="my-5">
        <div className="md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto bg-white text-black dark:bg-black dark:text-white p-5 md:p-10 rounded-md shadow">
          <FreindsTabButton/>
        </div>
      </div>
    </div>
  );
}

export default page;
