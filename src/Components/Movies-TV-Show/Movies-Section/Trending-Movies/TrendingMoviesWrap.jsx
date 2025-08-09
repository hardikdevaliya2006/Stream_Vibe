import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovieAndTV } from "../../../../Store/Actions/fetchTrendingMovieAndTV.action";
import SwiperNavigator from "./SwiperNavigator";
import TrendingMoviesSwiper from "./TrendingMoviesSwiper";

const TrendingMoviesWrap = () => {
  const { movieTrending, trendigDataLoading, error } = useSelector(
    (state) => state.trendingData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovieAndTV("movie"));
  }, []);

  const swiperRef = useRef(null);
  const slides = movieTrending || [];
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

  console.log(movieTrending);

  return (
    <div className="w-full py-6 px-4">
      <div className="slideHeader flex w-full items-center h-15 justify-between">
        <div className="text-white md:text-2xl text-lg font-semibold">
          Trending Now
        </div>
        {!trendigDataLoading && totalGroups > 0 && (
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

      <TrendingMoviesSwiper
        slides={slides}
        swiperRef={swiperRef}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={handleSlideChange}
        loading={trendigDataLoading}
      />
    </div>
  );
};

export default TrendingMoviesWrap;
