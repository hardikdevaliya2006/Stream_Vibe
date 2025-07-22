const SecationHeader = ({ subText, mainText }) => {
  return (
    <div className="secationHeaderTextWrap flex flex-col justify-start gap-2">
      <div className="mainText md:text-2xl xl:text-3xl xl:font-bold text-xl font-semibold text-white">
        <h1>{mainText}</h1>
      </div>
      <div className="subText break-words text-sm text-gray-60">
        <p className="inline">{subText.split("\n")[0]}</p>
        <p className="hidden lg:inline">{subText.split("\n")[1]}</p>
      </div>
    </div>
  );
};

export default SecationHeader;
