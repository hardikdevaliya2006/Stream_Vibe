import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchDetailMovieAndTV } from "../../Store/Actions/fetchDetailMovieAndTV.action";
import { useEffect } from "react";

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

  return <section className="pb-4 my-18">

  </section>;
};

export default MovieInformationWrap;
