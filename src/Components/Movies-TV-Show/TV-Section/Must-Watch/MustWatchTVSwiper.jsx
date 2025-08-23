import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { AiFillThunderbolt } from "react-icons/ai";
import TrendingContantLoader from "../../../Common/Loader/TrendingContantLoader";
import { HiRectangleStack } from "react-icons/hi2";
import { NavLink } from "react-router";

const MustWatchTVSwiper = ({
  slides,
  swiperRef,
  slidesPerGroup,
  onSlideChange,
  loading,
}) => {
  const skeletonCount = 8;
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      freeMode={true}
      slidesPerView={"auto"}
      slidesPerGroup={slidesPerGroup}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={onSlideChange}
      tag="ul"
      wrapperTag="div"
    >
      <div className="MoviesGenreWrap w-full generSlider overflow-x-auto">
        <ul className="flex items-center mb-2 justify-start w-fit gap-4">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <SwiperSlide key={i} tag="li" className="!w-fit">
                  <TrendingContantLoader />
                </SwiperSlide>
              ))
            : slides.map((slide, i) => (
                <SwiperSlide key={i} tag="div" className="!w-fit">
                  {
                    <NavLink to={`/Movies-Shows/tv/${slide.id}`}>
                      <div
                        key={slide.id}
                        className="relative cursor-pointer mr-[0.5rem] w-fit p-2 bg-gray-10 rounded-xl overflow-hidden group"
                      >
                        <div className="absolute inset-0 rounded-xl border border-gray-15 group-hover:border-[3px] transition-all duration-300 ease-in-out pointer-events-none z-10"></div>
                        <div className="slideData flex flex-col gap-2">
                          <div className="genreMoviesPosterWrap ">
                            <img
                              key={slide.id}
                              src={
                                slide.poster_path == null
                                  ? "/img/notFoundMovie.jpeg"
                                  : `https://image.tmdb.org/t/p/w200/${slide.poster_path}`
                              }
                              alt={slide.id}
                              className="h-44 w-full lg:h-58 xl:h-70 rounded-md"
                            />
                          </div>
                          <div className="slideInformation flex justify-between items-center text-[0.725rem] lg:text-sm text-gray-60 ">
                            <div className="voterAvg flex items-center justify-center gap-0.5 px-1.5 py-0.5 bg-gray-08 border border-gray-15 rounded-full">
                              <AiFillThunderbolt></AiFillThunderbolt>
                              <p>{slide.vote_average.toFixed(1)}</p>
                            </div>
                            <div className="popularity flex items-center justify-center gap-0.5 px-1.5 py-0.5 bg-gray-08 border border-gray-15 rounded-full">
                              <HiRectangleStack></HiRectangleStack>
                              <p>{slide.number_of_seasons} Seasons</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  }
                </SwiperSlide>
              ))}
        </ul>
      </div>
    </Swiper>
  );
};

export default MustWatchTVSwiper;
