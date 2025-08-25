import AuthFooter from "../Components/Auth/AuthFooter";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import UserProfileData from "../Components/UserData/UserProfileData";

const UserProfile = () => {
  return (
    <main className="userProfile h-full">
      <div className="mainContant h-full grid grid-rows-[60px_2fr] ">
        <header>
          <NavBarWrap />
        </header>
        <div className="Main xl:w-[78vw] h-full flex items-center justify-center lg:w-[80vw] lg:m-auto mx-4">
          <UserProfileData></UserProfileData>
        </div>
        <footer>
          <AuthFooter></AuthFooter>
        </footer>
      </div>
    </main>
  );
};

export default UserProfile;
