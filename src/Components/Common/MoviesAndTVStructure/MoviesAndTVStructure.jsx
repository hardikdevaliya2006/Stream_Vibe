

const MoviesAndTVStructure = ({ frameName, children }) => {
  return (
    <section className="FrameWrap pb-4 my-18">
      <div className="outerBox border relative rounded-md h-80 border-gray-15">
        <div className="absolute left-3 -top-5 w-fit flex justify-center items-center text-white bg-red-45 px-3 py-2 rounded-md">
          <button className="font-semibold w-fit text-[0.98rem] cursor-pointer">
            {frameName}
          </button>
        </div>
        {children}
      </div>
    </section>
  );
};

export default MoviesAndTVStructure;
