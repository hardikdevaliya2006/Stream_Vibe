import { useRef, useState } from "react";
import MiniSwiperNavigator from "../MoviesAndTVStructure/MiniSwiperNavigator";
import CastandCrewSwiper from "./CastandCrewSwiper";

const CastAndCrew = ({ dataType, castAndCrew }) => {
  const swiperRef = useRef(null);
  const slides = dataType === "cast" ? castAndCrew?.cast : castAndCrew?.crew;
  const slidesPerGroup = 2;

  const [isBeginning, setIsBeginning] = useState(true);
  const [activeGroup, setActiveGroup] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveGroup(Math.ceil(currentIndex / slidesPerGroup));
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <>
      <div className="w-auto flex-col flex gap-2 bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
        <div className="slideHeader flex w-full items-center justify-between">
          <div className="text-gray-60 text-sm font-semibold capitalize">
            {dataType}
          </div>
          <MiniSwiperNavigator
            isBeginning={isBeginning}
            isEnd={isEnd}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
        </div>
        {castAndCrew?.[dataType]?.length > 0 && (
          <CastandCrewSwiper
            slides={slides}
            swiperRef={swiperRef}
            slidesPerGroup={slidesPerGroup}
            onSlideChange={handleSlideChange}
          />
        )}
      </div>
    </>
  );
};

export default CastAndCrew;
