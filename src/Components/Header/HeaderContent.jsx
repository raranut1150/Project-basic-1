import { IoPlayCircleOutline } from "react-icons/io5";

function HeaderContent() {
  return (
    <div className=" mx-auto max-w-6xl">
      <div className="grid gap-x-5 grid-cols-1 lg:grid-cols-2 mx-4 lg:pt-32 sm:pt-16 pt-5">
        <div className=" flex flex-col order-2 lg:order-1 lg:w-[445px]">
          <p
            className="text-[#293FCC] text-sm font-semibold
         bg-[rgba(255,255,255,0.8)] w-fit px-5 py-2 rounded-[10px]  self-center  lg:self-start  "
          >
            Welcome QuickSpace
          </p>
          <h1 className="sm:text-[44px]  text-center  lg:text-left mx-auto max-w-2xl lg:mx-0 text-[32px]  font-semibold my-4 sm:leading-[70px] leading-relaxed text-[#090f4e] ">
            Satisfied Customer Is the Best Business Strategy
          </h1>
          <p className="lg:text-left mx-auto max-w-2xl lg:mx-0 text-wrap text-gray-400  mb-10 sm:leading-[32px] text-base text-center leading-normal">
            Backed with vast experience and fully up to date skills set, at
            Enuke Software offer the best in class E-Prescription solution
          </p>
          <div className="flex items-center flex-col lg:flex-row lg:gap-0">
            <a
              href="#"
              className=" text-lg font-semibold bg-[rgb(41,63,204)] hover:bg-opacity-70 lg:px-11 px-20 py-4 text-white  rounded-[6px] "
            >
              Try Free
            </a>
            <a href="#" className="mx-7 flex items-center space-x-2 py-6">
              <IoPlayCircleOutline
                className="size-6 fill-[#293FCC]"
                color="#293FCC"
              />
              <span className="text-[#0B0757]">View Demo</span>
            </a>
          </div>
        </div>

        <div className=" mx-auto mx-7xl py-16 sm:py-12 order-1 lg:order-2 lg:pr-24 ">
          <div className="relative max-sm:mx-10 ">
            <img
              src="/image/Rectangle 820.svg"
              alt="bg-3D"
              className="h-[200px] sm:h-[280px] lg:h-full "
            />
            <div className="absolute bottom-0 sm:right-12 right-8">
              <img
                src="/image/3D image.svg"
                alt="background3D"
                className="bg-cover bg-center h-[280px] sm:h-[380px] lg:h-full "
              />
            </div>

            <div>
              <div
                className=" absolute bg-mark z-10 md:top-[-50px] md:left-[-80px] sm:-top-12 sm:-left-16 -top-9 -left-12
              size-12 max-sm:size-8 "
              >
                <img
                  src="/image/Mask Copy 3.svg"
                  alt="maskCopy3"
                  className=" "
                />
              </div>
              <div
                className="absolute md:top-[-18px] -top-3 -left-8 sm:-left-11
            md:left-[-55px] bg-[#FFFFFF] w-fit sm:p-3 p-2 flex 
            flex-col justify-center md:gap-y-1  rounded-sm"
              >
                <p className="text-[#090F4E] font-semibold text-[7px] sm:text-[10px] md:text-xs ">
                  Great Designer
                </p>
                <div className="flex space-x-[2px] sm:space-x-1 size-[6px] sm:size-2 md:size-3">
                  <img src="/image/Frame.svg" alt="star" />
                  <img src="/image/Frame.svg" alt="star" />
                  <img src="/image/Frame.svg" alt="star" />
                  <img src="/image/Frame.svg" alt="star" />
                  <img src="/image/Frame.svg" alt="star" />
                </div>
              </div>
            </div>

            <div>
              <div className="absolute  sm:bottom-[-22px] lg:left-[-110px] sm:-left-[70px] -bottom-8 -left-16">
                <div className="flex justify-center items-center bg-[#ffff] p-2  lg:p-4 rounded-2xl 
               lg:w-[245px]">
                  <img
                    src="/image/notification-2.svg"
                    alt="notification"
                    className="bg-notification lg:size-12 sm:size-10 max-sm:size-8 p-2 lg:mr-5 sm:mr-3 mr-2"
                  />
                  <div>
                    <p className="text-[#858A8F] text-[10px] sm:text-[13px]  ">
                      Notification
                    </p>
                    <p className="text-[8px] sm:text-[10px] md:text-sm lg:text-[14px] sm:leading-normal leading-tight font-semibold">
                      Send a message to <br /> Ilya Zinchenko
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="absolute lg:bottom-16 lg:right-[-150px] sm:bottom-12 md:-right-40 sm:-right-36 bottom-8 -right-[70px]">
                <div className="flex sm:justify-between space-x-1 items-center bg-[#ffff] p-2 lg:p-4   rounded-2xl md:w-[230px] sm:w-52 w-[120px]">
                  <div className="relative">
                    <div className="size-12 max-sm:size-6 bg-mark border-2 sm:border-4 border-white ring-2 ring-blue-700 rounded-full">
                      <img
                        src="/image/bg copy 2.svg"
                        alt="maskCopy2"
                        className="m-auto"
                      />
                    </div>
                    <div className="mark-online absolute sm:top-[-1px] -top-0 right-[0px] sm:right-[-4px] sm:size-4 size-2 border-2"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col">
                      <p className="text-[#535783] font-semibold  md:text-sm sm:text-xs text-[8px]">
                        Gavin Henry
                      </p>
                      <p className="text-[#8589AE] font-semibold md:text-[13px] sm:text-[10px] text-[8px] [font-family:sans-serif]">
                        1m ago
                      </p>
                    </div>
                  </div>
                  <div className="text-notification lg:size-9 sm:size-6 size-5 flex justify-center items-center ">
                    <p className="text-xs text-white  [font-family:sans-serif]">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
