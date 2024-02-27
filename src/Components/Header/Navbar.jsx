import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto max-w-6xl ">
      <div className="  
      flex justify-between items-center relative py-3 mx-4">
        <div className="transition-all ease-in-out duration-300">
          <img
            src="/image/Logo.svg"
            alt="Logo"
            className="md:size-fit size-4/6 "
          />
        </div>

        <div className=" hidden  md:flex justify-center items-center ">
          <ul className="flex space-x-5 mx-6 lg:space-x-9 lg:mx-8 text-[#090f4e]  text-base lg:text-lg transition-all ease-in-out duration-300">
            <li>
              <a
                href="#"
                className="hover:opacity-55 ease-in-out duration-100 "
              >
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-55 ease-in-out duration-100">
                Feature
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-55 ease-in-out duration-100">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-55 ease-in-out duration-100">
                Log In
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="ease-in-out duration-300 md:text-base lg:text-lg font-medium bg-[rgb(41,63,204)] hover:bg-opacity-70 px-8 py-3 lg:px-12 lg:py-3 text-white  rounded-[6px]"
          >
            Try Free
          </a>
        </div>

        <div onClick={menuToggle} className="cursor-pointer md:hidden ">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        <div
          className={
            !isOpen
              ? "absolute top-[-200px] flex-col  opacity-0 transition-all ease-in-out duration-300 text-center"
              : "z-50 bg-gradient-to-b from-indigo-50 via-[#ffff] to-indigo-50 absolute md:hidden top-16 h-fit  w-full p-5 transition-all ease-in-out duration-300 text-center"
          }
        >
          <ul className="flex-col text-[#090f4e] text-lg space-y-5 mb-8">
            <li className="w-full h-full hover:opacity-35 hover:border-b-2 ease-in-out duration-100 ">
              <a
                href="#"
              >
                Company
              </a>
            </li>
            <li className="w-full h-full hover:opacity-35 hover:border-b ease-in-out duration-100 ">
              <a href="#" >
                Feature
              </a>
            </li>
            <li className="w-full h-full hover:opacity-35 hover:border-b ease-in-out duration-100 ">
              <a href="#" >
                Pricing
              </a>
            </li>
            <li className="w-full h-full hover:opacity-35  ease-in-out duration-100 ">
              <a href="#" >
                Log In
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="ease-in-out duration-300 text-lg font-medium bg-[rgb(41,63,204)] hover:bg-opacity-70 px-12 py-3 text-white  rounded-[6px]"
          >
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
