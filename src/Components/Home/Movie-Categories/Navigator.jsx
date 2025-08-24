import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import { useGenreSlider } from "../../../context/GenreSliderContext";

const Navigator = () => {
  const { currentSlide, scrollLeft, scrollRight } = useGenreSlider();

  return (
    <div className="NavigatorWrap flex items-start justify-end w-full">
      <div className="Navigtor flex items-center justify-center p-1 w-fit gap-1 text-white border-1 border-gray-15 rounded-xl bg-gray-06">
        <div
          className="LeftArrow hover:scale-105 transition-transform p-2 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
          onClick={scrollLeft}
        >
          <IoArrowBackOutline />
        </div>

        <div className="Lines flex items-center justify-center gap-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`h-1 cursor-pointer rounded-full w-5 ${
                index === currentSlide ? "bg-red-45" : "bg-gray-20"
              }`}
            ></div>
          ))}
        </div>

        <div
          className="RightArrow hover:scale-105 transition-transform p-2 border-1 border-gray-15 rounded-md bg-gray-10 w-fit cursor-pointer"
          onClick={scrollRight}
        >
          <IoArrowForwardOutline />
        </div>
      </div>
    </div>
  );
};

export default Navigator;
