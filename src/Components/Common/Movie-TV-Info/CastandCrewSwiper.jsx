import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import person from ".././../../../public/Icons/person.svg";

const CastandCrewSwiper = ({ slides, swiperRef, slidesPerGroup, onSlideChange }) => {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      slidesPerView={"auto"}
      slidesPerGroup={slidesPerGroup}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={onSlideChange}
      className="w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="!w-fit mr-2">
          <div className="cursor-pointer w-fit bg-gray-10 rounded-xl">
            <div className="slideData flex flex-col gap-2">
              <div className="genreMoviesPosterWrap border rounded-md overflow-hidden border-gray-15 h-35 w-22 flex items-end justify-end">
                <img
                  src={`${
                    slide?.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${slide?.profile_path}`
                      : person
                  }`}
                  alt={slide.name || "Cast"}
                  className="object-cover h-full w-full object-top"
                />
              </div>
              <div className="info">
                <h3 className="line-clamp-2 text-center text-white text-sm break-words w-22">
                  {slide.original_name}
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CastandCrewSwiper;
