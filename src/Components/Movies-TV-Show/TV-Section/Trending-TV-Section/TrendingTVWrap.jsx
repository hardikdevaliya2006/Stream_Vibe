import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovieAndTV } from "../../../../Store/Actions/fetchTrendingMovieAndTV.action";

const TrendingTVWrap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovieAndTV("tv"));
  }, []);
  const { tvTrending, trendigDataLoading, error } = useSelector(
    (state) => state.trendingData
  );

  return (
    <div>
      <h2>Trending TV Shows</h2>
      {trendigDataLoading ? (
        <div>Loading........</div>
      ) : tvTrending ? (
        <ul>{console.log(tvTrending)}</ul>
      ) : (
        <p>No trending TV available.</p>
      )}
    </div>
  );
};

export default TrendingTVWrap;