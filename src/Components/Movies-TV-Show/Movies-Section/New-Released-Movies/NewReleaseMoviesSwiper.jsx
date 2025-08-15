import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import TrendingContantLoader from "../../../Common/Loader/TrendingContantLoader";
import { NavLink } from "react-router";

const NewReleaseMoviesSwiper = ({
  slides,
  swiperRef,
  slidesPerGroup,
  onSlideChange,
  loading,
}) => {
  function formatDate(dateStr, format = "full") {
    const dateObj = new Date(dateStr);

    const day = dateObj.getDate();
    const monthFull = dateObj.toLocaleString("en-US", { month: "long" });
    const monthShort = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();

    if (format === "narrow") {
      return `${day} ${monthShort} ${year}`;
    } else if (format === "short") {
      return `${day} ${monthShort} ${year}`;
    } else {
      return `${day} ${monthFull} ${year}`;
    }
  }

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
                    <NavLink to={`/movie/${slide.id}`}>
                      <div
                        key={slide.id}
                        className="relative cursor-pointer mr-[0.5rem] w-fit p-2 bg-gray-10 rounded-xl overflow-hidden group"
                      >
                        <div className="absolute inset-0 rounded-xl border border-gray-15 group-hover:border-[3px] transition-all duration-300 ease-in-out pointer-events-none z-10"></div>
                        <div className="slideData flex flex-col gap-2">
                          <div className="genreMoviesPosterWrap ">
                            <img
                              key={slide.id}
                              src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`}
                              alt={slide.id}
                              className="h-44 w-full lg:h-58 xl:h-70 rounded-md"
                            />
                          </div>
                          <div className="slideInformation flex justify-center items-center text-[0.675rem] lg:text-sm text-gray-60 ">
                            <div className="ReleseDate px-2 w-full py-0.5 flex items-center justify-center bg-gray-08 border border-gray-15 rounded-full">
                              <p>
                                <span>Released </span>
                                <span className="text-gray-75">
                                  {formatDate(
                                    slide.release_date,
                                    window.innerWidth < 768 ? "narrow" : "full"
                                  )}
                                </span>
                              </p>
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

export default NewReleaseMoviesSwiper;
