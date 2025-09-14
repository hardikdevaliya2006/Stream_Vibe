import { Link } from "react-router";
import streamvibedesktoplogo from "../../../public/Logo/streamvibedesktoplogo.svg";
import { IoMdArrowRoundForward } from "react-icons/io";

const AuthHeader = ({ type }) => {
  return (
    <div className="grid grid-cols-2 items-center w-full h-16 px-4">
      <Link to={"/"} className="w-full lg:w-fit">
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </Link>
      <div className="login cursor-pointer flex items-center justify-end">
        <Link
          to={`/${type}`}
          className={`font-extrabold rounded-md text-white bg-red-45 ${
            type === "" ? "md:text-xl p-2" : "lg:px-3.5 lg:py-1.5 px-3 py-1"
          }`}
        >
          {type === "" ? <IoMdArrowRoundForward></IoMdArrowRoundForward> : type}
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
