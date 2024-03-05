import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../index.css";

function SignUp() {
  return (
    <div id="Login" className="mx-auto max-w-6xl bg-[#E7F5FF] sm:p-20 py-8 sm:rounded-[30px] ">
      <div className="mx-4">
        <div className="flex flex-col justify-center items-center max-w-[480px] mx-auto">
          <h2 className="text-[#090F4E] text-4xl leading-snug font-semibold text-center">
            Sign up to our newsletter
          </h2>
          <p className="sm:text-lg text-base text-center  text-[#63657E] max-w-[408px] p-3 roboto-regular ">
            Receive latest news, updates and many other news every week.
          </p>
          <form action="#" className="w-full items-center mx-auto flex py-2">
            <div className="relative w-full ">
              <input
                className="block p-5 pl-5  w-full text-sm text-gray-700 bg-white rounded-full border border-gray-300  focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Enter your email address"
                type="email"
                id="email"
                required=""
              />
              <a
                href="#"
                className="flex absolute inset-y-2 mr-3    right-0 items-center cursor-pointer size-11 bg-[#293FCC] rounded-full"
              >
                <ArrowForwardIosIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                  }}
                  className="text-gray-500 dark:text-gray-400  mx-auto"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
