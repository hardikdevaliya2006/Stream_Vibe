import streamvibedesktoplogo from "../../../../public/Logo/streamvibedesktoplogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import MobileMenuWrap from "./MobileMenuWrap";
import SerachMoviesTV from "../Search-Handel/SerachMoviesTV";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import fetchUserData from "../../../Store/Actions/fetchUserData.action";
import { isTokenExpired } from "../../../Helper/auth";

const NavBarWrap = () => {
  const { userData, error } = useSelector((state) => state.getuserData);

  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const hasValidToken = token && !isTokenExpired(token);

  const handleMenu = () => setMenu((prev) => !prev);

  useEffect(() => {
    if (hasValidToken) {
      dispatch(fetchUserData());
    } else {
      localStorage.removeItem("token");
    }
  }, [dispatch, hasValidToken]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center w-full h-16 px-4">
      <Link to={"/"} className="w-full lg:w-fit">
        <img src={streamvibedesktoplogo} alt="logo" className="h-10 md:h-12" />
      </Link>

      <div className="lg:flex w-fit justify-self-center items-center justify-center text-sm border-2 border-gray-15 rounded-xl px-1 py-1 gap-2 bg-gray-06 hidden">
        <NavLinks />
      </div>
      <div className="flex justify-end items-center">
        <div className="flex mr-2.5 items-center justify-end">
          <HiMiniMagnifyingGlass
            onClick={() => setIsOpen(true)}
            className="text-white md:text-[2.5rem] text-[2rem] rounded-full cursor-pointer p-1.5 hover:bg-gray-15"
          />
        </div>
        <SerachMoviesTV isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div
          className="bg-gray-10 lg:hidden flex cursor-pointer border-2 border-gray-15 rounded-md w-fit px-1 py-1"
          onClick={handleMenu}
        >
          <CgMenuRightAlt className="text-white md:text-3xl text-xl" />
        </div>
        <div className="authBtn lg:flex hidden items-center justify-center gap-2">
          {hasValidToken && userData?.name ? (
            <Link
              to={`/${userData?.name}`}
              className="login flex items-center justify-end"
            >
              <div className="profileIcon bg-gray-12 rounded-full flex items-center border border-gray-30 justify-center h-10 w-10">
                <h1 className="text-white font-extrabold capitalize">
                  {userData?.name?.charAt(0)}
                </h1>
              </div>
            </Link>
          ) : !hasValidToken || (!userData && error === "User not found") ? (
            <>
              {localStorage.removeItem("token")}
              <div className="login cursor-pointer flex items-center justify-end">
                <Link
                  to={`/login`}
                  className="px-3.5 py-1.5 rounded-lg text-white bg-gray-08 border border-gray-15"
                >
                  Login
                </Link>
              </div>
              <div className="Singup cursor-pointer flex items-center justify-end">
                <Link
                  to={`/singup`}
                  className="px-3.5 font-semibold py-1.5 rounded-lg text-white bg-red-45 border border-gray-15"
                >
                  Singup
                </Link>
              </div>
            </>
          ) : null}
        </div>

        <MobileMenuWrap
          isToken={hasValidToken}
          isOpen={menu}
          userData={userData}
        />
      </div>
    </div>
  );
};

export default NavBarWrap;
