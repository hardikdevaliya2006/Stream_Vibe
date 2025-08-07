import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import MoviesAndTVStructure from "../Components/Common/MoviesAndTVStructure/MoviesAndTVStructure";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import CarouselWrap from "../Components/Movies-TV-Show/Carousel/CarouselWrap";
import TVGenresWrap from "../Components/Movies-TV-Show/TV-Section/TV-Show-Genres/TVGenresWrap"
import MoviesGenresWrap from "../Components/Movies-TV-Show/Movies-Section/Movies-Genres/MoviesGenresWrap";

const MoviesAndTVShow = () => {
  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header className="headerWrap">
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:max-w-[78vw] lg:max-w-[80vw] lg:m-auto md:py-8 mx-4">
          <CarouselWrap></CarouselWrap>
          <MoviesAndTVStructure frameName={"Movies"}>
            <MoviesGenresWrap></MoviesGenresWrap>
          </MoviesAndTVStructure>
          <MoviesAndTVStructure frameName={"Shows"}>
            <TVGenresWrap></TVGenresWrap>
          </MoviesAndTVStructure>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default MoviesAndTVShow;
