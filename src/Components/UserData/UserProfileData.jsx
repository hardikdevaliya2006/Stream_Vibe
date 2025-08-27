import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Reducer/loginRequest.reducer";
import { useNavigate } from "react-router";
import { IoExitOutline } from "react-icons/io5";
import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import fetchUserData from "../../Store/Actions/fetchUserData.action";

const UserProfileData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData, error } = useSelector((state) => state.getuserData);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUserData());
    }
  }, [dispatch]);

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <section>
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
              className="p-2 w-[83%] md:w-[86%]  hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
              readOnly={false}
            />
            <button  className="h-10 w-10 flex items-center justify-center bg-gray-08 border border-gray-15 rounded-lg transition-all hover:border-gray-65">
              <lord-icon
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="click"
                stroke="bold"
                state="hover-line"
                colors="primary:#ffffff,secondary:#ffffff"
                className="w-6 h-6"
              ></lord-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="logout mt-10 flex flex-col gap-2 items-center justify-center">
        <button
          onClick={logoutUser}
          className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-green-400 border border-green-500/20 bg-green-500/10 rounded-lg shadow-md cursor-pointer"
        >
          <span>Logout</span>
          <span>
            <IoExitOutline></IoExitOutline>
          </span>
        </button>
        <button className="p-2 flex items-center justify-center gap-2 font-semibold w-[18rem] md:w-[22rem] lg:w-[24rem] text-red-400 border border-red-500/20 bg-red-500/10 rounded-lg shadow-md cursor-pointer">
          <span>Delete My Account</span>
          <span>
            <RiDeleteBinLine></RiDeleteBinLine>
          </span>
        </button>
      </div>
    </section>
  );
};

export default UserProfileData;
