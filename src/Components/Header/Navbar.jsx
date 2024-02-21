function Navbar() {
  return (
    <div className=" w-[90vw]  md:max-w-[1100px] h-28 border  m-auto flex justify-between items-center">
      <div>
        <img src="/image/Logo.svg" alt="Logo" />
      </div>
      <div className="hidden md:flex justify-center items-center ">
        <ul className="flex space-x-5 mx-6 lg:space-x-9 lg:mx-8 text-[#090f4e]  text-base lg:text-lg transition-all ease-in-out duration-300">
          <li>
            <a href="#" className="hover:opacity-55 ease-in-out duration-100 ">
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
    </div>
  );
}

export default Navbar;
