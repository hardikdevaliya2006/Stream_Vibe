import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenresWithMovies } from "../../../Store/Actions/fetchGenresWithMovies.action.js";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useGenreSlider } from "../../../context/GenreSliderContext.jsx";

const MoviesCategoryCardWrap = () => {
  const dispatch = useDispatch();
  const { genresWithMovies, genresLoading, error } = useSelector(
    (state) => state.tmdbGenreWithMovies
  );
  const { scrollRef, setTotalSlides } = useGenreSlider();

  useEffect(() => {
    dispatch(fetchGenresWithMovies());
  }, []);

  useEffect(() => {
    if (genresWithMovies.length > 0) {
      const slides = Math.ceil(genresWithMovies.length);
      setTotalSlides(slides);
    }
  }, [genresWithMovies]);

  if (genresLoading || error || !genresWithMovies) return null;

  return (
    <div
      className="MoviesGenreWrap w-full generSlider overflow-x-auto"
      ref={scrollRef}
    >
      <ul className="flex items-center justify-start w-max gap-4">
        {genresWithMovies.map((genre) => {
          return (
            <div className="MoviesGenreWrap w-full" key={genre.id}>
              <ul className="flex mb-2  items-center justify-start flex-wrap gap-4">
                <li className="w-fit relative p-2 bg-gray-10 border-2 border-gray-15 rounded-xl overflow-hidden">
                  <div className="genreMoviesPosterWrap gap-2 grid grid-cols-2 grid-rows-2">
                    {genre.moviesData.slice(0, 4).map((img) => {
                      return (
                        <img
                          key={img.id}
                          src={`https://image.tmdb.org/t/p/w200/${img.poster_path}`}
                          alt={img.id}
                          className="h-22 lg:h-28 xl:h-30 rounded-md"
                        />
                      );
                    })}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/2"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(20, 20, 20, 1) 20%, rgba(20, 20, 20, 0.6) 50%, transparent 100%)",
                    }}
                  ></div>
                  <div className="genreTextWrap absolute bottom-0 left-0 w-full px-2 py-2 text-white flex items-center justify-between">
                    <h2 className="text-[0.825rem] lg:text-sm font-semibold">
                      {genre.name}
                    </h2>
                    <IoArrowForwardOutline />
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesCategoryCardWrap;
