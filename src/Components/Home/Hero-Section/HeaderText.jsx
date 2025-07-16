import React from "react";

const HeaderText = () => {
  return (
    <div className="flex flex-col md:gap-2 items-center justify-center">
      <h1 className="text-white lg:text-4xl md:text-3xl md:font-bold text-2xl text-center font-semibold">
        The Best Streaming Experience
      </h1>
      <div className="text-gray-70 flex lg:text-[1rem] text-sm md:text-xl w-[90%] text-center">
        <div className="text-gray-70 text-center">
          <p className="inline">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
          <p className="hidden lg:inline">
            With StreamVibe, you can enjoy a wide variety of content, including
            the latest blockbusters, classic movie, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
