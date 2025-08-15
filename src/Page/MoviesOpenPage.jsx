import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import HeaderWrap from "../Components/Common/Header/HeaderWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import MovieInformationWrap from "../Components/Movie-Open-Page/MovieInformationWrap";

const MoviesOpenPage = () => {
  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header className="headerWrap">
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:max-w-[78vw] lg:max-w-[80vw] lg:m-auto md:py-8 mx-4">
          <HeaderWrap></HeaderWrap>
          <MovieInformationWrap></MovieInformationWrap>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default MoviesOpenPage;
