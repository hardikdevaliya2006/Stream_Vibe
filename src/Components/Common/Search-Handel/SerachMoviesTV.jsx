import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearResults,
  setQuery,
} from "../../../Store/Reducer/searchResults.reducer";
import { fetchSearchResults } from "../../../Store/Actions/fetchSearchResults.action";
import { useNavigate } from "react-router";

const SerachMoviesTV = ({ isOpen, onClose }) => {
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const dispatch = useDispatch();
  const { qurey, searchResult, loadingSearchData } = useSelector(
    (state) => state.searchData
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (!isOpen) {
      dispatch(clearResults());
    }
  }, [isOpen, dispatch]);

  const handelChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
    dispatch(fetchSearchResults(value));
  };

  const navigate = useNavigate();

  const handleSearchClick = (id, type) => {
    {
      type == "tv"
        ? navigate(`/Movies-Shows/tv/${id}`)
        : navigate(`/Movies-Shows/movie/${id}`);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl z-70"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full max-w-[768px] w-full bg-gray-06 z-80 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 text-white">
          <div>
            <div className="serchHearder flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold mb-4">Search</h2>
              <button
                className="cursor-pointer text-white text-2xl"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              value={qurey}
              onChange={handelChange}
              placeholder="Search Movies And TV Here"
              className="w-full p-3 bg-gray-10 border rounded-md border-gray-15 text-white outline-none"
            />
          </div>

          <div className="flex-1 noScrollBar overflow-y-auto mt-4 space-y-4">
            {loadingSearchData && (
              <p className="text-center text-gray-400">Loading...</p>
            )}

            {!loadingSearchData && searchResult.length > 0 ? (
              searchResult.map((item) => (
                <div
                  onClick={() => {
                    handleSearchClick(item.id, item.media_type);
                    onClose();
                  }}
                  key={item.id}
                  className="flex cursor-pointer items-center gap-4 bg-gray-10 border border-gray-15 p-2 rounded-lg"
                >
                  {item.poster_path ? (
                    <img
                      src={`${IMG_BASE}${item.poster_path}`}
                      alt={item.title || item.name}
                      className="w-16 h-24 object-cover rounded-md"
                    />
                  ) : (
                    <img
                      src="/img/notFoundMovie.jpeg"
                      alt={item.title || item.name}
                      className="w-16 h-24 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-medium">
                      {item.title || item.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.media_type === "movie" ? "Movie" : "TV Show"}
                    </p>
                  </div>
                </div>
              ))
            ) : qurey && !loadingSearchData ? (
              <div className="flex mt-5 items-center flex-col w-full justify-center">
                <img
                  src="/img/search-empty-illustration.png"
                  alt="results"
                  className="min-w-[200px]"
                />
                <h3 className="font-semibold text-gray-25">
                  No Search Result Found For "{qurey}"
                </h3>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full justify-center">
                <img
                  src="/img/search-glow-illustration.png"
                  alt="results"
                  className="min-w-[200px]"
                />
                <h3 className="font-semibold text-gray-25">
                  Discover Anything
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SerachMoviesTV;
