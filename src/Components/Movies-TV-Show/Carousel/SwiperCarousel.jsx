import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarouselImg } from "../../../Store/Actions/fetchCarouselImg.action";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import playBtn from "../../../../public/Logo/streamvibeplayerlogo.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel = () => {
  const { carousleImg } = useSelector((state) => state.carousleImgData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarouselImg());
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-15">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {carousleImg.slice(0, 6).map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative sm:h-full h-[350px] sm:w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${img.backdrop_path}`}
                alt={index}
                className="w-full h-full object-cover"
              />
              <div className="information absolute flex gap-2 flex-col w-full items-center justify-center bottom-10 z-10">
                <div className="text-white font-semibold text-2xl">
                  <h3>{img.title || img.name}</h3>
                </div>
                <div className="text-gray-65 text-center text-sm hidden sm:flex">
                  <p>{img.overview}</p>
                </div>
                <div className="buttensWrap flex items-center justify-center gap-2">
                  <div className="playNow">
                    <div className="actionBtn cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 px-5 py-1.5 rounded-md">
                      <img
                        src={playBtn}
                        alt="playNow"
                        className="h-3 cursor-pointer"
                      />
                      <button className="cursor-pointer">Play Now</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <div className="cursor-pointer flex items-center justify-center bg-gray-06 border rounded-md border-gray-15  p-2">
                        <lord-icon
                          src="https://cdn.lordicon.com/gzqofmcx.json"
                          trigger="click"
                          className={"h-5 w-5"}
                          colors="primary:#fff"
                        ></lord-icon>
                      </div>
                    </div>
                    <div>
                      <div className="cursor-pointer flex items-center justify-center bg-gray-06 border rounded-md border-gray-15  p-2">
                        <lord-icon
                          src="https://cdn.lordicon.com/nvsfzbop.json"
                          trigger="click"
                          state="hover-heartbeat-alt"
                          className={"h-5 w-5"}
                          colors="primary:#ffffff,secondary:#ffffff"
                        ></lord-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-1 px-1 w-full z-40 flex items-center justify-between">
        <div className="custom-prev bg-gray-06 border border-gray-15 text-white p-2 rounded-md cursor-pointer">
          <IoArrowBackOutline className="text-[1rem]" />
        </div>
        <div className="custom-pagination flex w-fit items-center justify-center gap-1 " />
        <div className="custom-next bg-gray-06 border border-gray-15 text-white p-2 rounded-md cursor-pointer">
          <IoArrowForwardOutline className="text-[1.2rem]" />
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
