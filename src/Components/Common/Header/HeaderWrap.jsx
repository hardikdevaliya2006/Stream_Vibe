import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";
import { fetchDetailMovieAndTV } from "../../../Store/Actions/fetchDetailMovieAndTV.action";
import playBtn from "../../../../public/Logo/streamvibeplayerlogo.svg";
import LikeButton from "../AnimationIcon/LikeButton";
import SaveButton from "../AnimationIcon/SaveButton";
import { useEffect } from "react";

const HeaderWrap = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailMovieAndTV({ type: type, id: id }));
  }, []);

  const { movieDetail, tvDetail, detailsDataLoading, error } = useSelector(
    (state) => state.detailData
  );

  const detailsData = type === "movie" ? movieDetail : tvDetail;
  if (detailsDataLoading) {
    return (
      <section
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(20, 20, 20, 1) 20%, rgba(20, 20, 20, 0.6) 50%, transparent 100%), url('/img/banner.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
        }}
        className="relative 2xl:h-[720px] lg:h-[480px] h-[350px] sm:w-full rounded-md border border-gray-15"
      >
        <div className="absolute inset-0 shimmer" />
        <div className="relative z-10 text-white text-center pt-10 text-2xl"></div>
      </section>
    );
  }

  return (
    <section className="md:pb-4 mb-5 md:mb-10">
      <div className="relative rounded-lg overflow-hidden border border-gray-15">
        <div className="relative sm:h-full 2xl:h-[720px] h-[350px] sm:w-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${detailsData.backdrop_path}`}
            alt={detailsData.title || detailsData.name}
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

          <div className="information absolute flex gap-2 2xl:gap-4 flex-col w-full items-center justify-center bottom-5 2xl:bottom-10 z-50">
            <div className="text-white w-[95%] text-center flex justify-center items-center">
              <h3 className="max-w-full inline-block font-semibold leading-tight 2xl:text-4xl 2xl:font-extrabold lg:text-3xl text-2xl">
                <div className="w-48 h-16 md:w-50 md:h-20 xl:w-60 xl:h-30 flex items-baseline-last justify-center">
                  {detailsData?.images?.logos?.length > 0 ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${detailsData?.images?.logos?.[0]?.file_path}`}
                      alt={detailsData?.title || detailsData?.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <h3>{detailsData?.title || detailsData?.name}</h3>
                  )}
                </div>
              </h3>
            </div>

            <div className="text-gray-65 w-[90%] text-center 2xl:text-[1.1rem] text-sm hidden lg:flex">
              <p className="line-clamp-2 text-center w-full">
                {detailsData.overview}
              </p>
            </div>
            <div className="buttensWrap flex items-center justify-center 2xl:gap-4 gap-2">
              {/* <NavLink
                to={
                  type == "tv"
                    ? `/Movies-Shows/tv/${id}/1/1/watch`
                    : `/Movies-Shows/movie/${id}/watch`
                }
              > */}
                <div className="playNow">
                  <div className="actionBtn cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 px-5 py-1.5 rounded-md">
                    <img
                      src={playBtn}
                      alt="playNow"
                      className="h-3 2xl:h-4 cursor-pointer"
                    />
                    <button className="cursor-pointer 2xl:font-semibold 2xl:text-[1.1rem]">
                      {type == "tv" ? "Play S1 E1" : "Play Movie"}
                    </button>
                  </div>
                </div>
              {/* </NavLink> */}

              <div className="flex items-center justify-center gap-2">
                <div className="cursor-pointer flex items-center justify-center bg-gray-06 border rounded-md border-gray-15 p-[0.56rem]">
                  <SaveButton />
                </div>
                <div className="cursor-pointer flex items-center justify-center bg-gray-06 border rounded-md border-gray-15 p-[0.56rem]">
                  <LikeButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderWrap;
