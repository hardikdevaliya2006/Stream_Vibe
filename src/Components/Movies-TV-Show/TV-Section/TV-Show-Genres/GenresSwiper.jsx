import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { IoArrowForwardOutline } from "react-icons/io5";
import GenreSkeletonSlide from "../../../Common/Loader/GenreSkeletonSlide";

const GenresSwiper = ({
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
      slidesPerView={"auto"}
      freeMode={true}
      slidesPerGroup={slidesPerGroup}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={onSlideChange}
      tag="ul"
      wrapperTag="div"
      allowTouchMove={!loading}
    >
      <div className="MoviesGenreWrap w-full generSlider overflow-x-auto">
        <ul className="flex items-center mb-2 justify-start w-fit gap-4">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <SwiperSlide key={i} tag="li" className="!w-fit">
                  <GenreSkeletonSlide />
                </SwiperSlide>
              ))
            : slides.map((slide, i) => (
                <SwiperSlide key={i} tag="li" className="!w-fit">
                  {
                    <div
                      key={slide.id}
                      className="relative cursor-pointer mr-[0.5rem] w-fit p-2 bg-gray-10 rounded-xl overflow-hidden group"
                    >
                      <div className="absolute inset-0 rounded-xl border border-gray-15 group-hover:border-[3px] transition-all duration-300 ease-in-out pointer-events-none z-10"></div>
                      <div className="genreMoviesPosterWrap gap-2 grid grid-cols-2 grid-rows-2">
                        {slide.items.slice(0, 4).map((img) => {
                          return (
                            <img
                              key={img.id}
                              src={
                                img.poster_path == null
                                  ? "/img/notFoundMovie.jpeg"
                                  : `https://image.tmdb.org/t/p/w200/${img.poster_path}`
                              }
                              alt={img.id}
                              className="h-22 w-full lg:h-28 xl:h-30 rounded-md"
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
                          {slide.name}
                        </h2>
                        <IoArrowForwardOutline />
                      </div>
                    </div>
                  }
                </SwiperSlide>
              ))}
        </ul>
      </div>
    </Swiper>
  );
};

export default GenresSwiper;
