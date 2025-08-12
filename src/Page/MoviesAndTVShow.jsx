import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import MoviesAndTVStructure from "../Components/Common/MoviesAndTVStructure/MoviesAndTVStructure";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import CarouselWrap from "../Components/Movies-TV-Show/Carousel/CarouselWrap";
import TVGenresWrap from "../Components/Movies-TV-Show/TV-Section/TV-Show-Genres/TVGenresWrap";
import MoviesGenresWrap from "../Components/Movies-TV-Show/Movies-Section/Movies-Genres/MoviesGenresWrap";
import TrendingMoviesWrap from "../Components/Movies-TV-Show/Movies-Section/Trending-Movies/TrendingMoviesWrap";
import TrendingTVWrap from "../Components/Movies-TV-Show/TV-Section/Trending-TV-Section/TrendingTVWrap";
import NewReleasedMoviesWrap from "../Components/Movies-TV-Show/Movies-Section/New-Released-Movies/NewReleasedMoviesWrap";

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
            <TrendingMoviesWrap></TrendingMoviesWrap>
            <NewReleasedMoviesWrap></NewReleasedMoviesWrap>
          </MoviesAndTVStructure>
          <MoviesAndTVStructure frameName={"Shows"}>
            <TVGenresWrap></TVGenresWrap>
            <TrendingTVWrap></TrendingTVWrap>
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
