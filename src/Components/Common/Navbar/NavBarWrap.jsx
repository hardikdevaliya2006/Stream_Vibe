import streamvibedesktoplogo from "../../../../public/Logo/streamvibedesktoplogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const NavBarWrap = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 ">
      <div>
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </div>
      <div className="lg:flex items-center justify-center border-2 border-gray-15 rounded-md px-2 py-2 gap-2 bg-gray-06 hidden menueSecation">
        <div>Home</div>
        <div>Movies & Shows</div>
        <div>Support</div>
        <div>Subscriptions</div>
      </div>
      <div className="lg:flex hidden search">
        <HiMiniMagnifyingGlass className=""></HiMiniMagnifyingGlass>
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
