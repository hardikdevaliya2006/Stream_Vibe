import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useEffect } from "react";
import OtherInfo from "../Common/Movie-TV-Info/OtherInfo";
import Trailer from "../Common/Movie-TV-Info/Trailer";
import { fetchDetailMovieAndTV } from "../../Store/Actions/fetchDetailMovieAndTV.action";
import Description from "../Common/Movie-TV-Info/Description";
import CastAndCrew from "../Common/Movie-TV-Info/CastAndCrew";
import SimilarMoviesTVWrap from "../Common/Movie-TV-Info/SimilarMoviesTVWrap";

const TVInformationWrap = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailMovieAndTV({ type: type, id: id }));
  }, [id, dispatch, type]);

  const { movieDetail, tvDetail, detailsDataLoading, error } = useSelector(
    (state) => state.detailData
  );
  const detailsData = type === "movie" ? movieDetail : tvDetail;

  if (detailsDataLoading) {
    return <div>Loading........</div>;
  }

  return (
    <section className="pb-4 my-12 flex items-start gap-2 flex-col lg:flex-row justify-center">
      <div className="movieTvInformation flex flex-col lg:order-2 gap-2 w-full lg:w-[30%] ">
        {console.log(tvDetail)}
        <OtherInfo
          type={type}
          genres={detailsData.genres}
          castAndDirector={detailsData?.credits}
          popularity={detailsData.popularity}
          releaseDate={detailsData?.first_air_date}
          {...(type === "tv"
            ? {
                episode: detailsData?.number_of_episodes,
                seasons: detailsData?.number_of_seasons,
              }
            : { runTime: detailsData?.runtime })}
          spokenLanguages={detailsData?.spoken_languages}
          voteAverage={detailsData.vote_average}
        ></OtherInfo>
        {detailsData?.videos?.results.length > 0 &&
          detailsData?.videos?.results.find((i) => i.type === "Trailer") && (
            <div className="trailer">
              <Trailer videos={detailsData?.videos}></Trailer>
            </div>
          )}
      </div>
      <div className="castCrewAndDescription w-full lg:w-[70%] flex flex-col gap-2">
        <div className="description">
          <Description text={detailsData.overview}></Description>
        </div>
        <div className="castWrap">
          <CastAndCrew
            dataType={"cast"}
            castAndCrew={detailsData?.credits}
          ></CastAndCrew>
        </div>
        <div className="crew">
          <CastAndCrew
            dataType={"crew"}
            castAndCrew={detailsData?.credits}
          ></CastAndCrew>
        </div>
        <div className="similarContant">
          <SimilarMoviesTVWrap
            type={type}
            genreId={detailsData?.genres}
          ></SimilarMoviesTVWrap>
        </div>
      </div>
    </section>
  );
};

export default TVInformationWrap;
