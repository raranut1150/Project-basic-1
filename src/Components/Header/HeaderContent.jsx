import { IoPlayCircleOutline } from "react-icons/io5";

function HeaderContent() {
  return (
    <div>
      <div className="grid gap-x-5 grid-cols-1 md:grid-cols-2 max-w-[1100px] border-red-500 w-[90vw]  h-[80vh] border m-auto items-end">
        <div className="flex-col w-5/6 ">
          <p className="text-[#293FCC] text-sm font-semibold bg-[#ffff] w-fit rounded-xl px-5 py-2 ">
            Welcome QuickSpace
          </p>
          <h1 className="text-[#090f4e] font-semibold text-[44px] leading-relaxed my-4">
            Satisfied Customer Is the Best Business Strategy
          </h1>
          <p className="text-base text-[#63657E] leading-[32px] mb-10">
            Backed with vast experience and fully up to date skills <br />
            set, at Enuke Software offer the best in class <br />
            E-Prescription solution
          </p>
          <div className="flex">
            <a
              href="#"
              className="ease-in-out duration-300 md:text-base lg:text-lg font-medium bg-[rgb(41,63,204)] hover:bg-opacity-70 px-11 py-4 text-white  rounded-[6px]"
            >
              Try Free
            </a>
            <a href="#" className="mx-7 flex items-center space-x-2">
              <IoPlayCircleOutline className="size-6 text-[rgb(41,63,204)]" />
              <span className="text-[#090f4e]">View Demo</span>
            </a>
          </div>
        </div>
        <div className="border border-red-500 ">
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
