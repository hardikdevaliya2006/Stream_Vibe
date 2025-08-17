import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const MiniSwiperNavigator = ({
  onPrev,
  onNext,
  isBeginning,
  isEnd,
}) => {
  return (
    <div className="Navigator flex items-center justify-center gap-1 text-white">
      <button
        onClick={onPrev}
        disabled={isBeginning}
        className="LeftArrow hover:scale-105 transition-transform p-1 md:p-1.5 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
      >
        <IoArrowBackOutline />
      </button>

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

export default MiniSwiperNavigator;
