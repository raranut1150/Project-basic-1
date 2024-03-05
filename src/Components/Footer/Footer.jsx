import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Footer() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <footer className="mx-auto max-w-6xl py-24">
      <div className="mx-4">
        {/* footer before responsive */}
        <div className="hidden md:flex flex-col ">
          <div className="flex justify-between  w-full">
            {/* logo */}
            <div className=" ">
              <a href="#">
                <img
                  src="/image/Logo.svg"
                  alt="Logo"
                  className="sm:size-fit mb-20"
                />
              </a>

              <ul>
                <li className="flex items-center gap-x-3 mb-6">
                  <MailOutlineIcon sx={{ color: "gray" }} />
                  <span className="lg:text-xl  text-lg text-[#63657E]">
                    quickspace@mail.com
                  </span>
                </li>
                <li className="flex items-center gap-x-3 mb-6">
                  <CallOutlinedIcon sx={{ color: "gray" }} />
                  <span className="lg:text-xl  text-lg text-[#63657E]">
                    548 457 3695 55
                  </span>
                </li>
              </ul>
            </div>
            {/* tag1 */}
            <div className="">
              <h4 className="lg:text-[22px] text-xl font-medium text-[#090F4E] mb-11">
                Home
              </h4>
              <ul>
                <li className=" pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Accesibility
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Certification
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Knowledge Base
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Documentation
                  </a>
                </li>
                <li className="pb-5 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    User Group
                  </a>
                </li>
              </ul>
            </div>
            {/* tag2 */}
            <div className=" ">
              <h4 className="lg:text-[22px] text-xl font-medium text-[#090F4E] mb-11">
                Pages
              </h4>
              <ul>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Blogs
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base text-[#63657E]">
                    Careers
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base  text-[#63657E]">
                    Communities
                  </a>
                </li>
                <li className="pb-5 mb-1 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base  text-[#63657E]">
                    Webinars
                  </a>
                </li>
                <li className="pb-5 hover:opacity-35  ease-in-out duration-100 ">
                  <a href="#" className="lg:text-lg text-base  text-[#63657E]">
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            {/* tag3 */}
            <div className="">
              <h4 className="lg:text-[22px] text-xl font-medium text-[#090F4E] mb-11">
                Our Address
              </h4>
              <ul>
                <li className="flex items-baseline gap-x-3 mb-6 pb-5">
                  <img src="./image/Location.svg" alt="location" />
                  <span className="lg:text-lg text-base text-[#63657E] ">
                    London, New area <br /> road 04, England
                  </span>
                </li>
                <li className="flex items-baseline gap-x-5 lg:pl-3 pl-4">
                  <a
                    href="#"
                    className="hover:opacity-35  ease-in-out duration-100 "
                  >
                    <img
                      src="./image/google.svg"
                      alt="google"
                      className="max-lg:size-4"
                    />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-35  ease-in-out duration-100 "
                  >
                    <img
                      src="./image/twitter.svg"
                      alt="google"
                      className="max-lg:size-4"
                    />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-35  ease-in-out duration-100 "
                  >
                    <img
                      src="./image/instagram.svg"
                      alt="google"
                      className="max-lg:size-4"
                    />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-35  ease-in-out duration-100 "
                  >
                    <img
                      src="./image/linkedin.svg"
                      alt="google"
                      className="max-lg:size-4"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* copy writing */}
          <div className="mt-28  grid grid-cols-3 ">
            <span className="lg:text-base text-sm text-[#63657E] col-span-2">
              Copyright ©2021 QuickSpace. All Rights Reserved
            </span>
            <ul className="lg:text-base text-sm text-[#63657E] flex justify-between ">
              <li>Home</li>
              <li>Team</li>
              <li>Privecy policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* footer after responsive */}
        <div className="md:hidden flex flex-col">
          <div>
            {/* logo */}
            <div className=" ">
              <a href="#">
                <img src="/image/Logo.svg" alt="Logo" className="w-9/12 mb-6" />
              </a>
            </div>
            {/* desc */}
            <div className="max-sm:max-w-96 mx-auto ">
              <p className="sm:text-base text-sm text-[#8480AE] sm:text-center text-left ">
                Winged moving moveth created for shall and a divide the their
                days male midst shall hath doesn&apos;t won&apos;t for. Midst
                life.Over a great night.
              </p>
            </div>
            {/* logo app*/}
            <div className="my-10">
              <ul className="flex sm:justify-center sm:gap-x-5 gap-x-3">
                <li className="bg-[#293FCC1A] rounded-full sm:size-12 size-8 flex justify-center items-center">
                  <a href="#">
                    <svg
                      className="sm:size-8 size-4 fill-[#293FCC]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33335 8.99992H11L11.6667 6.33325H9.33335V4.99992C9.33335 4.31325 9.33335 3.66659 10.6667 3.66659H11.6667V1.42659C11.4494 1.39792 10.6287 1.33325 9.76202 1.33325C7.95202 1.33325 6.66669 2.43792 6.66669 4.46659V6.33325H4.66669V8.99992H6.66669V14.6666H9.33335V8.99992Z"
                        fill="#293FCC"
                      />
                      <defs>
                        <clipPath id="clip0_2_27">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="bg-[#293FCC1A] rounded-full sm:size-12 size-8 flex justify-center items-center">
                  <a href="#">
                    <svg
                      className="sm:size-8 size-4 "
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1367 4.59375C16.8398 4.06641 17.4727 3.43359 18 2.66016C17.2969 2.97656 16.5938 3.1875 15.8906 3.25781C16.6641 2.76562 17.2266 2.09766 17.5078 1.21875C16.7695 1.64062 15.9961 1.95703 15.1523 2.09766C14.8008 1.74609 14.3789 1.46484 13.9219 1.25391C13.4648 1.04297 12.9727 0.9375 12.4453 0.9375C11.7773 0.9375 11.1797 1.11328 10.6172 1.42969C10.0547 1.78125 9.59766 2.23828 9.28125 2.80078C8.92969 3.36328 8.78906 3.99609 8.78906 4.62891C8.78906 4.91016 8.78906 5.19141 8.85938 5.47266C7.34766 5.40234 5.94141 5.05078 4.60547 4.34766C3.26953 3.67969 2.17969 2.76562 1.26562 1.60547C0.914062 2.20312 0.738281 2.83594 0.738281 3.46875C0.738281 4.10156 0.878906 4.69922 1.19531 5.22656C1.47656 5.78906 1.89844 6.21094 2.39062 6.5625C1.79297 6.5625 1.23047 6.38672 0.738281 6.07031V6.14062C0.738281 7.01953 1.01953 7.79297 1.58203 8.46094C2.14453 9.16406 2.84766 9.58594 3.69141 9.76172C3.33984 9.83203 3.02344 9.86719 2.70703 9.86719C2.49609 9.86719 2.25 9.86719 2.03906 9.83203C2.25 10.5703 2.67188 11.168 3.30469 11.6602C3.9375 12.1523 4.64062 12.3633 5.48438 12.3633C4.11328 13.418 2.56641 13.9453 0.878906 13.9453C0.527344 13.9453 0.246094 13.9453 0 13.9102C1.6875 15.0352 3.58594 15.5625 5.66016 15.5625C7.80469 15.5625 9.70312 15.0352 11.3906 13.9102C12.9023 12.9258 14.0977 11.625 14.9414 9.9375C15.75 8.39062 16.1719 6.73828 16.1719 5.05078C16.1719 4.83984 16.1367 4.69922 16.1367 4.59375Z"
                        fill="#293FCC"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#293FCC1A] rounded-full sm:size-12 size-8 flex justify-center items-center">
                  <a href="#">
                    <svg
                      className="sm:size-8 size-4"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.75 0.375C15.0312 0.375 15.3125 0.515625 15.5234 0.726562C15.7344 0.9375 15.875 1.21875 15.875 1.5V15C15.875 15.3164 15.7344 15.5977 15.5234 15.8086C15.3125 16.0195 15.0312 16.125 14.75 16.125H1.25C0.933594 16.125 0.652344 16.0195 0.441406 15.8086C0.230469 15.5977 0.125 15.3164 0.125 15V1.5C0.125 1.21875 0.230469 0.9375 0.441406 0.726562C0.652344 0.515625 0.933594 0.375 1.25 0.375H14.75ZM4.87109 13.875H4.90625V6.35156H2.55078V13.875H4.87109ZM3.71094 5.33203C4.0625 5.33203 4.37891 5.22656 4.66016 4.94531C4.94141 4.66406 5.08203 4.34766 5.08203 3.99609C5.08203 3.64453 4.94141 3.32812 4.66016 3.04688C4.37891 2.76562 4.0625 2.625 3.71094 2.625C3.32422 2.625 3.00781 2.76562 2.76172 3.04688C2.48047 3.32812 2.375 3.64453 2.375 3.99609C2.375 4.34766 2.48047 4.66406 2.76172 4.94531C3.00781 5.22656 3.32422 5.33203 3.71094 5.33203ZM13.625 13.875V9.76172C13.625 8.60156 13.4492 7.75781 13.1328 7.19531C12.6758 6.52734 11.9023 6.17578 10.8477 6.17578C10.2852 6.17578 9.82812 6.31641 9.40625 6.5625C9.05469 6.77344 8.77344 7.05469 8.63281 7.37109H8.59766V6.35156H6.34766V13.875H8.66797V10.1484C8.66797 9.58594 8.73828 9.12891 8.91406 8.8125C9.125 8.42578 9.51172 8.21484 10.0742 8.21484C10.6016 8.21484 10.9531 8.46094 11.1289 8.88281C11.2344 9.16406 11.3047 9.62109 11.3047 10.2188V13.875H13.625Z"
                        fill="#293FCC"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#293FCC1A] rounded-full sm:size-12 size-8 flex justify-center items-center">
                  <a href="#">
                    <svg
                      className="sm:size-8 size-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.362 4.33208C14.6666 5.52008 14.6666 8.00008 14.6666 8.00008C14.6666 8.00008 14.6666 10.4801 14.362 11.6681C14.1926 12.3247 13.6973 12.8414 13.07 13.0161C11.9306 13.3334 7.99998 13.3334 7.99998 13.3334C7.99998 13.3334 4.07131 13.3334 2.92998 13.0161C2.29998 12.8387 1.80531 12.3227 1.63798 11.6681C1.33331 10.4801 1.33331 8.00008 1.33331 8.00008C1.33331 8.00008 1.33331 5.52008 1.63798 4.33208C1.80731 3.67541 2.30265 3.15875 2.92998 2.98408C4.07131 2.66675 7.99998 2.66675 7.99998 2.66675C7.99998 2.66675 11.9306 2.66675 13.07 2.98408C13.7 3.16141 14.1946 3.67741 14.362 4.33208ZM6.66665 10.3334L10.6666 8.00008L6.66665 5.66675V10.3334Z"
                        fill="#293FCC"
                      />
                      <defs>
                        <clipPath id="clip0_2_36">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* according */}

            <div className="mb-8 ">
              {/* acc1 */}
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <span className="font-medium sm:text-2xl text-xl text-[#0B0757] ">
                    Customer Support
                  </span>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              {/* acc2 */}
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <span className="font-medium sm:text-2xl text-xl text-[#0B0757] ">
                    Quick Links
                  </span>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              {/* acc3 */}
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  <span className="font-medium sm:text-2xl text-xl text-[#0B0757] ">
                    Resources
                  </span>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
          <div className="sm:text-xl text-lg mx-auto text-[#63657E]">
            Copyright ©2020 Quicklinks
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
