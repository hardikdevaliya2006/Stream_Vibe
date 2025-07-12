import NavBarWrap from "../../Common/Navbar/NavBarWrap";
import playBtn from "../../../../public/Logo/streamvibeplayerlogo.svg";
import streamvibetransperentlogo from "../../../../public/Logo/streamvibetransperentlogo.svg";
import HeaderText from "./HeaderText";

const HeroSecationWrap = () => {
  return (
    <div className="outer relative w-full lg:h-[550px] md:h-[450px] h-[400px]">
      <div className="inner absolute z-20 flex items-center justify-between flex-col h-full w-full">
        <div className="navBarWrap w-full">
          <NavBarWrap></NavBarWrap>
        </div>
        <div className="transperantLogoWrap">
          <img
            src={streamvibetransperentlogo}
            alt="transperantLogoWrap"
            className="h-35 md:h-45 lg:h-55"
          />
        </div>
        <div className="acationSecation flex flex-col items-center justify-center gap-5">
          <HeaderText></HeaderText>
          <div className="actionBtn cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 w-fit px-3 py-2 rounded-md">
            <img src={playBtn} alt="playNow" className="h-3 cursor-pointer" />
            <button className="text- font-semibold cursor-pointer">
              Start Watching Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="inner2 h-full w-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to top,rgb(20, 20, 20) 0%,rgba(20, 20, 20, 0.6) 50%,rgb(20, 20, 20) 100%),url('/img/header.jpeg')`,
        }}
      ></div>
    </div>
  );
};

export default HeroSecationWrap;
