import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchDetailMovieAndTV } from "../../Store/Actions/fetchDetailMovieAndTV.action";
import { useEffect } from "react";
import Description from "../Common/Movie-TV-Info/Description";
import OtherInfo from "../Common/Movie-TV-Info/OtherInfo";
import Trailer from "../Common/Movie-TV-Info/Trailer";
import CastAndCrew from "../Common/Movie-TV-Info/CastAndCrew";
import SimilarMoviesTV from "../Common/Movie-TV-Info/SimilarMoviesTVWrap";

const MovieInformationWrap = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailMovieAndTV({ type: type, id: id }));
  }, [id, dispatch]);

  const { movieDetail, tvDetail, detailsDataLoading, error } = useSelector(
    (state) => state.detailData
  );
  const detailsData = type === "movie" ? movieDetail : tvDetail;

  return (
    <section className="pb-4 my-12 flex items-start gap-2 flex-col lg:flex-row justify-center">
      <div className="movieTvInformation flex flex-col lg:order-2 gap-2 w-full lg:w-[30%] ">
        <OtherInfo
          genres={detailsData.genres}
          castAndDirector={detailsData?.credits}
          popularity={detailsData.popularity}
          releaseDate={detailsData.release_date}
          runTime={detailsData.runtime}
          spokenLanguages={detailsData?.spoken_languages}
          voteAverage={detailsData.vote_average}
          detailsDataLoading={detailsDataLoading}
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
          <SimilarMoviesTV
            type={type}
            genreId={movieDetail?.genres}
          ></SimilarMoviesTV>
        </div>
      </div>
    </section>
  );
};

export default MovieInformationWrap;
