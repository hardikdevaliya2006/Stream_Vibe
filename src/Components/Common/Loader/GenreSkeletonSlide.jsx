// GenreSkeletonSlide.jsx
const GenreSkeletonSlide = () => {
  return (
    <li className="w-fit list-none relative mr-[0.5rem] p-2 border border-gray-15 bg-gray-10 overflow-hidden rounded-xl animate-pulse">
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 genreMoviesPosterWrap">
        {Array(4)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="h-20 w-13 lg:w-18 lg:h-28 xl:w-19 bg-gray-30 rounded-md"
            />
          ))}
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(20, 20, 20, 1) 20%, rgba(20, 20, 20, 0.6) 50%, transparent 100%)",
        }}
      ></div>
    </li>
  );
};

export default GenreSkeletonSlide;
