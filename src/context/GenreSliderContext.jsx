import { createContext, useContext, useState, useRef } from "react";

const GenreSliderContext = createContext();

export const useGenreSlider = () => useContext(GenreSliderContext);

export const GenreSliderProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const slideWidth = 1200; 
  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const scrollLeft = () => {
    if (currentSlide > 0) scrollTo(currentSlide - 1);
  };

  const scrollRight = () => {
    if (currentSlide < totalSlides - 1) scrollTo(currentSlide + 1);
  };

  return (
    <GenreSliderContext.Provider
      value={{
        scrollRef,
        currentSlide,
        totalSlides,
        setTotalSlides,
        scrollLeft,
        scrollRight,
      }}
    >
      {children}
    </GenreSliderContext.Provider>
  );
};
