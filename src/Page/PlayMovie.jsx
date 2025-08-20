import { useLocation } from "react-router";
import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import MoviePlayer from "../Components/Play-Movie-TV/MoviePlayer";

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
          <MoviePlayer></MoviePlayer>
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
