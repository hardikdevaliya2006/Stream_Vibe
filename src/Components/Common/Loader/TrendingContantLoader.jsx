const TrendingContantLoader = () => {
  return (
    <div className="w-fit list-none relative mr-[0.5rem] p-2 border border-gray-15 bg-gray-10 overflow-hidden rounded-xl animate-pulse">
      <div className="genreMoviesPosterWrap flex-col flex gap-2">
        <div className="h-44 w-30 lg:h-58 lg:w-45 xl:h-70 bg-gray-30 rounded-md" />
        <div className="informayionGroup flex justify-between">
            <div className="h-4 w-10 bg-gray-30 rounded-full" />
            <div className="h-4 w-8 bg-gray-30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default TrendingContantLoader;
