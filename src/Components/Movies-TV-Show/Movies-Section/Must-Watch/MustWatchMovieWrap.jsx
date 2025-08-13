import { useDispatch, useSelector } from "react-redux";
import { fetchMustWatchMovieAndTV } from "../../../../Store/Actions/fetchMustWatchMovieAndTV.action";
import { useEffect } from "react";

const MustWatchMovieWrap = () => {
  const { mustWatchMovies, mustWatchTV, mustWatchDataLoading, error } =
    useSelector((state) => state.mustWatchData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMustWatchMovieAndTV("tv"));
  }, []);
  return (
    <>
      {mustWatchDataLoading
        ? console.log("Wait.......")
        : console.log(mustWatchTV)}
    </>
  );
};

export default MustWatchMovieWrap;
