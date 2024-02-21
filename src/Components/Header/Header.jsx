import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <div className="h-screen bg-gradient-to-b from-indigo-50 via-[#ffff] to-indigo-100">
      <Navbar />
      <HeaderContent/>
    </div>
  );
}

export default Header;
