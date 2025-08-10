import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const SwiperNavigator = ({
  totalGroups,
  activeGroup,
  onDotClick,
  onPrev,
  onNext,
  isBeginning,
  isEnd,
}) => {
  return (
    <div className="Navigator flex items-center justify-center p-1 w-fit gap-1 text-white border-1 border-gray-15 rounded-xl bg-gray-06">
      <button
        onClick={onPrev}
        disabled={isBeginning}
        className="LeftArrow hover:scale-105 transition-transform p-1 md:p-1.5 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
      >
        <IoArrowBackOutline />
      </button>

      <ul className="flex items-center gap-1"> 
        {Array.from({ length: totalGroups }).map((_, i) => (
          <li
            key={i}
            onClick={() => onDotClick(i)}
            className={`text-xl transition ${
              i === activeGroup
                ? "bg-red-45 md:h-[0.3rem] h-1 rounded-md md:w-3.5 w-3"
                : "bg-white/40 md:h-[0.3rem] h-1 rounded-md md:w-3.5 w-3"
            }`}
          ></li>
        ))}
      </ul>

      <button
        onClick={onNext}
        disabled={isEnd}
        className="RightArrow hover:scale-105 transition-transform p-1 md:p-1.5 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
      >
        <IoArrowForwardOutline />
      </button>
    </div>
  );
};

export default SwiperNavigator;
