// GenreSkeletonSlide.jsx
const GenreSkeletonSlide = () => {
  return (
    <div className="relative mr-[0.5rem] w-fit p-2 bg-gray-10 rounded-xl overflow-hidden">
      <div className="genreMoviesPosterWrap gap-2 grid grid-cols-2 grid-rows-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="h-22 lg:h-28 xl:h-30 rounded-md bg-gray-800 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full px-2 py-2 text-white flex items-center justify-between">
        <div className="h-4 w-16 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-4 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default GenreSkeletonSlide;
