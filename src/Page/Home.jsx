import HeroSecationWrap from "../Components/Home/Hero-Section/HeroSecationWrap";
import { MoviesGenerWrap } from "../Components/Home/Movie-Categories/MoviesGenerWrap";
import StreamVibeSppiner from "../Components/Common/Loader/StreamVibeSppiner";
import { useSelector } from "react-redux";

const Home = () => {
    const { genresLoading } = useSelector((state) => state.tmdbGenreWithMovies);

  return (
    <main className="homePage h-full">
      {!!genresLoading && <StreamVibeSppiner></StreamVibeSppiner>}
      <div className="mainContant h-full">
        <header>
          <HeroSecationWrap></HeroSecationWrap>
        </header>
        <div className="Main xl:w-[78vw] lg:w-[80vw] lg:m-auto mx-4">
          <MoviesGenerWrap></MoviesGenerWrap>
        </div>
        <footer></footer>
      </div>
    </main>
  );
};

export default Home;
