import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import MovieTVPlayer from "../Components/Play-Movie-TV/MovieTVPlayer";

const PlayMovieAndTV = () => {
  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header className="headerWrap">
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:max-w-[78vw] lg:max-w-[80vw] lg:m-auto md:py-8 mx-4">
          <MovieTVPlayer></MovieTVPlayer>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default PlayMovieAndTV;
