import streamvibedesktoplogo from "../../../../public/Logo/streamvibedesktoplogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";

const NavBarWrap = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 ">
      <div>
        <img src={streamvibedesktoplogo} alt="logo" className="h-10" />
      </div>
      <div></div>
      <div>
        <div className="search bg-gray-10 border-2 border-gray-15 rounded-md w-fit px-1 py-1">
          <CgMenuRightAlt className="text-white text-2xl"></CgMenuRightAlt>
        </div>
      </div>
    </div>
  );
};

export default NavBarWrap;
