import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Reducer/loginRequest.reducer";
import { Link, useNavigate } from "react-router";
import { IoExitOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import fetchUserData from "../../Store/Actions/fetchUserData.action";
import { FaLock } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { sendRequestDeleteUser } from "../../Store/Actions/sendRequestDeleteUser.action";
import { resetDeleteState } from "../../Store/Reducer/deleteUser.reducer";

const UserProfileData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);

  const { userData, userDataLoading, error } = useSelector(
    (state) => state.getuserData
  );
  const {
    actionLoading,
    isDelete,
    error: deleteError,
  } = useSelector((state) => state.deleteUser);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUserData());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isDelete) {
      navigate("/");
      dispatch(resetDeleteState());
    }
  }, [isDelete, dispatch, navigate]);

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    dispatch(sendRequestDeleteUser());
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <section>
      {userDataLoading ? (
        <>
          <div className="profileIcon flex items-center justify-center">
            <div className="profileIcon w-full flex items-center justify-center">
              <div className="animate-pulse bg-gray-30 rounded-full h-20 w-20"></div>
            </div>
          </div>
          <div className="hiMsg flex items-center justify-center mt-5">
            <div className="bg-gray-30 animate-pulse h-8 rounded-full w-40"></div>
          </div>
          <div className="userInfo w-full flex flex-col items-center justify-center gap-4 mt-10">
            <div className="flex-col w-full flex items-start justify-center gap-2">
              <div className="animate-pulse h-4 w-20 bg-gray-30 rounded-full"></div>
              <div className="animate-pulse h-10 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg"></div>
            </div>
            <div className="flex-col w-full flex items-start justify-center gap-2">
              <div className="animate-pulse h-4 w-20 bg-gray-30 rounded-full"></div>
              <div className="animate-pulse h-10 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg"></div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 items-center justify-center">
            <button className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg h-10 animate-pulse"></button>
            <button className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg h-10 animate-pulse"></button>
            <button className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg h-10 animate-pulse"></button>
            <button className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] bg-gray-30 rounded-lg h-10 animate-pulse"></button>
          </div>
        </>
      ) : (
        <>
          <div className="profileIcon flex items-center justify-center">
            <div className="profileIcon flex items-center justify-center bg-gray-12 rounded-full border border-gray-30 h-20 w-20">
              <h1 className="text-white text-3xl font-extrabold capitalize">
                {userData?.name?.charAt(0) || ""}
              </h1>
            </div>
          </div>
          <div className="hiMsg text-2xl flex items-center justify-center mt-5 font-semibold text-white">
            <p className="capitalize"> 👋🏻 Hello {userData?.name} </p>
          </div>
          <div className="userInfo flex flex-col items-center justify-center gap-4 mt-10">
            <div className="flex-col flex items-start justify-center gap-2">
              <label htmlFor="email" className="text-white font-semibold">
                Your Email
              </label>
              <input
                value={userData?.email}
                className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
                readOnly
              />
            </div>
            <div className="flex-col w-full flex items-start justify-center gap-2">
              <label htmlFor="name" className="text-white font-semibold">
                Your Name
              </label>
              <div className="nameWrap gap-2 flex items-center justify-center w-full">
                <input
                  value={userData?.name}
                  className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 items-center justify-center">
            <button className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-yellow-400 border border-yellow-500/20 bg-yellow-500/10 rounded-lg shadow-md cursor-pointer">
              <span>Forgot My Password</span>
              <span>
                <FaLock></FaLock>
              </span>
            </button>
            <Link
              to={"/update-user"}
              className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-blue-400 border border-blue-500/20 bg-blue-500/10 rounded-lg shadow-md cursor-pointer"
            >
              <span>Change Name</span>
              <span>
                <MdModeEditOutline></MdModeEditOutline>
              </span>
            </Link>
            <button
              onClick={logoutUser}
              className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-green-400 border border-green-500/20 bg-green-500/10 rounded-lg shadow-md cursor-pointer"
            >
              <span>Logout</span>
              <span>
                <IoExitOutline></IoExitOutline>
              </span>
            </button>
            <>
              <button
                onClick={handleDeleteClick}
                className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-red-400 border border-red-500/20 bg-red-500/10 rounded-lg shadow-md cursor-pointer"
              >
                <span>Delete My Account</span>
                <span>
                  <RiDeleteBinLine></RiDeleteBinLine>
                </span>
              </button>
              <AnimatePresence>
                {showConfirm && (
                  <motion.div
                    className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className="bg-gray-06 p-6 rounded-lg w-[20rem] flex flex-col items-center gap-4 "
                      initial={{ scale: 0.6, opacity: 0, y: 30 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        },
                      }}
                      exit={{
                        scale: 0.85,
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      <h2 className="text-lg w-full text-white">
                        Are you sure you want to delete your account?
                      </h2>
                      <div className="grid grid-cols-2 w-full gap-1">
                        <button
                          onClick={handleCancel}
                          className="px-4 py-2 rounded text-green-400 font-semibold bg-green-500/10"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleConfirm}
                          className="px-4 py-2 rounded text-red-400 font-semibold bg-red-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          </div>
        </>
      )}
    </section>
  );
};

export default UserProfileData;
