import streamvibedesktoplogo from "../../../../public/Logo/streamvibedesktoplogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { useState } from "react";
import MobileMenuWrap from "./MobileMenuWrap";

const NavBarWrap = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu((prev) => !prev);

  return (
    <div className="flex relative items-center justify-between w-full h-16 px-4">
      <div className="lg:w-[20%] w-full">
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </div>
      <div className="lg:flex items-center justify-center text-sm border-2 border-gray-15 rounded-xl px-1 py-1 gap-2 bg-gray-06 hidden">
        <NavLinks />
      </div>
      <div className="lg:flex hidden w-[20%] items-center justify-end">
        <HiMiniMagnifyingGlass className="text-white text-3xl rounded-full cursor-pointer p-1.5 hover:bg-gray-15" />
      </div>
      <div className="lg:hidden">
        <div
          className="bg-gray-10 border-2 border-gray-15 rounded-md w-fit px-1 py-1"
          onClick={handleMenu}
        >
          <CgMenuRightAlt className="text-white md:text-3xl text-2xl" />
        </div>
        <MobileMenuWrap isOpen={menu} />
      </div>
    </div>
  );
};

export default NavBarWrap;
