import React from "react";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import CarouselWrap from "../Components/Movies-TV-Show/Carousel/CarouselWrap";

const MoviesAndTVShow = () => {
  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header className="headerWrap mb-4">
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:w-[78vw] lg:w-[80vw] lg:m-auto mx-4">
          <CarouselWrap></CarouselWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default MoviesAndTVShow;
