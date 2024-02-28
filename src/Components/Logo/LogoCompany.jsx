import Branch_01 from "/image/brand-01.svg";
import Branch_04 from "/image/brand-04.svg";
import Branch_05 from "/image/brand-05.svg";
import Branch_06 from "/image/brand-06.svg";

function LogoCompany() {
  return (
    <div className="mx-auto max-w-3xl my-32 overflow-hidden">
      <div className="mx-4 flex justify-center lg:space-x-24 sm:space-x-12 space-x-8">
        <img src={Branch_04} alt="logo" className="max-sm:w-[60px]"/>
        <img src={Branch_01} alt="logo" className="max-sm:w-[60px]"/>
        <img src={Branch_05} alt="logo" className="max-sm:w-[60px]"/>
        <img src={Branch_06} alt="logo" className="max-sm:w-[60px]"/>
      </div>
    </div>
  );
}

export default LogoCompany;
