import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchDetailMovieAndTV } from "../../Store/Actions/fetchDetailMovieAndTV.action";
import { useEffect } from "react";
import Description from "../Common/Movie-TV-Info/Description";
import OtherInfo from "../Common/Movie-TV-Info/OtherInfo";

const MovieInformationWrap = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailMovieAndTV({ type: type, id: id }));
  }, []);

  const { movieDetail, tvDetail, detailsDataLoading, error } = useSelector(
    (state) => state.detailData
  );
  const detailsData = type === "movie" ? movieDetail : tvDetail;

  return (
    <section className="pb-4 my-18">
      <div className="castCrewAndDescription flex flex-col gap-4">
        <div className="description">
          <Description text={detailsData.overview}></Description>
        </div>
        <div className="movieTvInformation">
          <OtherInfo
            budget={detailsData.budget}
            genres={detailsData.genres}
            // director={detailsData.credits.crew}
            popularity={detailsData.popularity}
            releaseDate={detailsData.release_date}
            runTime={detailsData.runtime}
            spokenLanguages={detailsData.spoken_languages}
            voteAverage={detailsData.vote_average}
          ></OtherInfo>
        </div>
        <div className="castWrap"></div>
        <div className="trailer"></div>
      </div>
      <div className="movieTvInformation hidden"></div>
    </section>
  );
};

export default MovieInformationWrap;
