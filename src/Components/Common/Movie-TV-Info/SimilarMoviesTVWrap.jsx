import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSimilarMoviesAndTV } from "../../../Store/Actions/fetchSimilarMoviesAndTV.action";
import SwiperNavigator from "../MoviesAndTVStructure/SwiperNavigator";
import SimilarMoviesAndTVSwiper from "./SimilarMoviesAndTVSwiper";

const SimilarMoviesTVWrap = ({ type, genreId }) => {
  const dispatch = useDispatch();

  const { movieSimilar, tvSimilar, similarDataLoading, error } = useSelector(
    (state) => state.similarData
  );
  useEffect(() => {
    dispatch(fetchSimilarMoviesAndTV({ type, genreId }));
  }, [dispatch, type, genreId]);

  const detailsData = type === "movie" ? movieSimilar : tvSimilar;

  const swiperRef = useRef(null);
  const slides = detailsData || [];
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
    <div className="w-full ">
      <div className="slideHeader flex w-full items-center h-15 justify-between">
        <div className="text-white md:text-2xl text-lg font-semibold">
          You Might Like
        </div>
        {!similarDataLoading && totalGroups > 0 && (
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

      <SimilarMoviesAndTVSwiper
        type={type}
        slides={slides}
        swiperRef={swiperRef}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={handleSlideChange}
        loading={similarDataLoading}
      />
    </div>
  );
};

export default SimilarMoviesTVWrap;
