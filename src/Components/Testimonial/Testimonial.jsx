import { FaQuoteLeft } from "react-icons/fa";
function Testimonial() {
  return (
    <div className="z-10 relative bg-white ">
      <div className="mx-auto max-w-6xl -z-10 ">
        <div className="md:py-32 py-16 mx-4  ">
          <div className="relative lg:ml-8 ml-4 ">
            <div className="absolute lg:-top-16 lg:-left-12 -top-10 -left-8 bg-[#13A6FA] flex items-center justify-center lg:size-24 size-16 rounded-full -z-20">
              <FaQuoteLeft fill="white" className="md:size-8 size-6" />
            </div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-[#090F4E] font-medium ">
              What Our Customer <br /> are Saying
            </h1>
          </div>
          <div className="lg:mx-8 sm:mx-4 grid md:grid-cols-2 grid-cols-1 md:mt-16 mt-8 gap-12 items-center">
            <div className=" md:border-r-2  max-md:border-b-2 lg:pr-16 md:pr-10 ">
              <p className="lg:text-2xl md:text-xl text-lg text-[#090F4E] leading-relaxed">
                Great Service with Good Quality Photographers PhotoScape
              </p>
              <p className="lg:text-[15px] md:text-[14] text-[13px] leading-relaxed text-[#63657E]  my-4">
                I truly have nothing but the highest praise and appreciation for
                all that you did for us. Saving me on the video montage
                projection was huge, and even more important the amazing
                pictures.{" "}
              </p>
              <div className="flex items-center pb-8 gap-x-5">
                <img src="/image/Photo1.svg" alt="Photo" />
                <div>
                  <p className="text-base font-semibold text-[#090F4E]">
                    Pricillia Makalew
                  </p>
                  <p className="text-sm text-[#63657E] leading-loose">
                    EhyaScape Client
                  </p>
                </div>
              </div>
            </div>

            <div className=" lg:pr-16 md:pr-10 ">
              <p className="lg:text-2xl md:text-xl text-lg text-[#090F4E] ">
                Really love the Fast Delivery Photos File Service. Just 48
                Hours. It’s Crazy!
              </p>
              <p className="lg:text-[15px] md:text-[14] text-[13px] text-[#63657E] leading-relaxed my-4">
                I truly have nothing but the highest praise and appreciation for
                all that you did for us. Saving me on the video montage
                projection was huge, and even more important the amazing
                pictures.{" "}
              </p>
              <div className="flex items-center pb-8 gap-x-5">
                <img src="/image/Photo2.svg" alt="Photo" />
                <div>
                  <p className="text-base font-semibold text-[#090F4E]">
                    Dany Olmo
                  </p>
                  <p className="text-sm text-[#63657E] leading-loose">
                    EhyaScape Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
