import { useLocation } from "react-router";
import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import TVPlayer from "../Components/Play-Movie-TV/TVPlayer";

const PlayMovie = () => {
  const locationTemp = useLocation();
  const location = locationTemp.pathname.split("/");
  const type = location[2];

  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header className="headerWrap">
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:max-w-[78vw] lg:max-w-[80vw] lg:m-auto md:py-8 mx-4">
          <TVPlayer></TVPlayer>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default PlayMovie;
