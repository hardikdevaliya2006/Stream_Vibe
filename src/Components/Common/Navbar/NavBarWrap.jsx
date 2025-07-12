import streamvibedesktoplogo from "../../../../public/Logo/streamvibedesktoplogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import NavLinks from "./NavLinks";

const NavBarWrap = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 ">
      <div className="lg:w-[20%] w-full">
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </div>
      <div className="lg:flex items-center justify-center text-sm border-2 border-gray-15 rounded-xl px-1 py-1 gap-2 bg-gray-06 hidden menueSecation">
        <NavLinks></NavLinks>
      </div>
      <div className="lg:flex hidden w-[20%] items-center justify-end search">
        <HiMiniMagnifyingGlass className="text-white text-3xl rounded-full cursor-pointer p-1.5 transition-all hover:bg-gray-15"></HiMiniMagnifyingGlass>
      </div>
      <div className="lg:hidden">
        <div className="menue bg-gray-10 border-2 border-gray-15 rounded-md w-fit px-1 py-1">
          <CgMenuRightAlt className="text-white md:text-3xl text-2xl"></CgMenuRightAlt>
        </div>
      </div>
    </div>
  );
};

export default NavBarWrap;
