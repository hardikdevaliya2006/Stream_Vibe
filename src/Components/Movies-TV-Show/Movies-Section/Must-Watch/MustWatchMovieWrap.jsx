import { useDispatch, useSelector } from "react-redux";
import { fetchMustWatchMovieAndTV } from "../../../../Store/Actions/fetchMustWatchMovieAndTV.action";
import { useEffect, useRef, useState } from "react";
import SwiperNavigator from "../../../Common/MoviesAndTVStructure/SwiperNavigator";
import MustWatchMoviesSwiper from "./MustWatchMoviesSwiper";

const MustWatchMovieWrap = () => {
  const { mustWatchMovies, mustWatchDataLoading, error } = useSelector(
    (state) => state.mustWatchData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMustWatchMovieAndTV("movie"));
  }, []);

  const swiperRef = useRef(null);
  const slides = mustWatchMovies || [];
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
          Must Watch
        </div>
        {!mustWatchDataLoading && totalGroups > 0 && (
          <SwiperNavigator
            totalGroups={totalGroups}
            activeGroup={activeGroup}
            isBeginning={isBeginning}
            isEnd={isEnd}
            onDotClick={handleDotClick}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
        )}
      </div>

      {console.log(mustWatchMovies)}

      <MustWatchMoviesSwiper
        slides={slides}
        swiperRef={swiperRef}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={handleSlideChange}
        loading={mustWatchDataLoading}
      />
    </div>
  );
};

export default MustWatchMovieWrap;
