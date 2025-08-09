import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenerByMoviesAndTV } from "../../../../Store/Actions/fetchGenerByMoviesAndTV.action";
import SwiperNavigator from "./SwiperNavigator";
import GenresSwiper from "./GenresSwiper";

const MoviesGenresWrap = () => {
  const dispatch = useDispatch();
  const { movieGenres, genreWithContentLoading } = useSelector((state) => state.genreByMoviesAndTV);

  useEffect(() => {
    dispatch(fetchGenerByMoviesAndTV("movie"));
  }, []);

  const swiperRef = useRef(null);
  const slides = movieGenres || [];
  const slidesPerGroup = 4;

  const totalGroups = Math.ceil(slides.length / slidesPerGroup);
  const [activeGroup, setActiveGroup] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveGroup(Math.ceil(currentIndex / slidesPerGroup));
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleDotClick = (groupIndex) => {
    swiperRef.current?.slideTo(groupIndex * slidesPerGroup);
  };

  return (
    <div className="w-full py-6 px-4">
      <div className="slideHeader flex w-full items-center h-15 justify-between">
        <div className="text-white md:text-2xl text-lg font-semibold">
          Our Genres
        </div>
        <SwiperNavigator
          totalGroups={totalGroups}
          activeGroup={activeGroup}
          isBeginning={isBeginning}
          isEnd={isEnd}
          onDotClick={handleDotClick}
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />
      </div>

      <GenresSwiper
        slides={slides}
        swiperRef={swiperRef}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
};

export default MoviesGenresWrap;
