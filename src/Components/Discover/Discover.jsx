function Discover() {
  return (
    <div className="ld:mt-52 mt-32 mx-auto max-w-6xl">
      <div className="mx-4 flex flex-col items-center ">
        <p
          className="text-[#293FCC] text-sm font-semibold border
         bg-[#E9EDFF] w-fit px-5 py-2 rounded-xl my-6 "
        >
          Discover & Explore
        </p>
        <h2 className="md:text-3xl text-2xl font-semibold text-center  text-[#090F4E]">
          Join An Attractive & Personaliozed
        </h2>
        <p className="text-[#63657E] sm:text-lg text-base text-center md:max-w-3xl mx-auto sm:my-8 my-6 ">
          Graphs displaying your performance for metrics like follower
          evolution, average rate per post and reach and impressions to give you
          the insights.
        </p>
        <div className="relative  hidden">
          <img src="/image/dashboard 1.svg" alt="dashboard" className="lg:w-full md:w-[680px]"/>
          <img src="/image/Sales.svg" alt="sales" className=" absolute bottom-8 lg:-left-52 lg:pl-20 max-lg:w-[200px] md:-left-20  max-md:w-[150px] - clip-path "/>
        </div>
        <div className="md:hidden inline-block  w-full sm:-mt-24 -mt-16 mb-12">
          <img src="/image/Group 5771 1.svg" alt="dashboard" className="w-full"/>
        </div>
      </div>
    </div>
  );
}

export default Discover;
