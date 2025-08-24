import { Link } from "react-router";
import streamvibedesktoplogo from "../../../public/Logo/streamvibedesktoplogo.svg";


const AuthHeader = () => {
  return (
    <div className="grid grid-cols-2 items-center w-full h-16 px-4">
      <Link to={"/"} className="w-full lg:w-fit">
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </Link>
      <div className="login cursor-pointer flex items-center justify-end">
        <Link to={"/login"} className="px-3 py-1 font-extrabold rounded-md text-white bg-red-45">
            Login
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
