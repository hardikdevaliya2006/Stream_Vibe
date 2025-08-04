import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const MoviesGenresWrap = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = Array.from({ length: 8 }, (_, i) => `Slide ${i + 1}`);
  const [activeGroup, setActiveGroup] = useState(0);

  const slidesPerGroup = 2;
  const totalGroups = Math.floor(slides.length / slidesPerGroup) - 1;

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full max-w-[1000px] mx-auto py-6 px-4">
      <div className="slideHeader flex w-full items-center h-15 justify-between">
        <div className="text-white text-lg font-semibold">Our Genres</div>
        <div className="Navigtor flex items-center justify-center p-1 w-fit gap-1 text-white border-1 border-gray-15 rounded-xl bg-gray-06">
          <button
            ref={prevRef}
            onClick={() => swiperRef.current.slidePrev()}
            disabled={isBeginning}
            className="LeftArrow hover:scale-105 transition-transform p-1 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
          >
            <IoArrowBackOutline />
          </button>
          <ul className="flex items-center gap-1">
            {Array.from({ length: totalGroups }).map((_, i) => (
              <li
                key={i}
                onClick={() => {
                  swiperRef.current.slideTo(i * slidesPerGroup);
                }}
                className={`text-xl transition ${
                  i === activeGroup
                    ? "bg-red-45 h-1 rounded-md w-3"
                    : "bg-white/40 h-1 rounded-md w-3"
                }`}
              ></li>
            ))}
          </ul>
          <button
            ref={nextRef}
            onClick={() => swiperRef.current.slideNext()}
            disabled={isEnd}
            className="RightArrow hover:scale-105 transition-transform p-1 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
          >
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={4}
        slidesPerGroup={slidesPerGroup}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const currentIndex = swiper.realIndex;
          setActiveGroup(Math.floor(currentIndex / slidesPerGroup));
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-800 text-white rounded-md h-32 flex items-center justify-center text-sm shadow-sm">
              {slide}
            </div>
          </SwiperSlide>
        ))}           
      </Swiper>
    </div>
  );
};

export default MoviesGenresWrap;