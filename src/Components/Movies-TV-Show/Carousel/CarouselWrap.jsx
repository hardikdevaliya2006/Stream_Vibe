import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarouselImg } from "../../../Store/Actions/fetchCarouselImg.action";

const CarouselWrap = () => {
  const { carousleImg, carousleImgLoading, error } = useSelector(
    (state) => state.carousleImgData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarouselImg());
  }, []);

  
  if (carousleImg) {
    console.log(carousleImg);
  }

  return (
    <section>
      <div className="carouselWrap"></div>
    </section>
  );
};

export default CarouselWrap;
