import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovieAndTV } from "../../../../Store/Actions/fetchTrendingMovieAndTV.action";

const TrendingMoviesWrap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovieAndTV("movie"));
  }, []);
  const { movieTrending, trendigDataLoading, error } = useSelector(
    (state) => state.trendingData
  );

  return (
    <div>
      <h2>Trending TV Shows</h2>
      {trendigDataLoading ? (
        <div>Loading........</div>
      ) : movieTrending ? (
        <ul>{console.log(movieTrending)}</ul>
      ) : (
        <p>No trending movie available.</p>
      )}
    </div>
  );
};

export default TrendingMoviesWrap;
