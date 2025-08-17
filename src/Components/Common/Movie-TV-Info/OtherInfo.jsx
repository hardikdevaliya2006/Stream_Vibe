import { CiCalendar } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import StarRating from "../AnimationIcon/StarRating";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdDisc } from "react-icons/io";
import person from "../../../../public/Icons/person.svg";

const OtherInfo = ({
  genres,
  castAndDirector,
  popularity,
  releaseDate,
  runTime,
  spokenLanguages,
  voteAverage,
}) => {
  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);

    const day = dateObj.getDate();
    const monthFull = dateObj.toLocaleString("en-US", { month: "long" });
    const monthShort = dateObj.toLocaleString("en-US", { month: "long" });
    const year = dateObj.getFullYear();

    return `${day} ${monthShort} ${year}`;
  }

  const directorInfo = castAndDirector?.crew?.filter(
    (person) => person.job == "Director"
  );
  const music = castAndDirector?.crew?.filter(
    (person) => person.job == "Music" || "Sound"
  );

  return (
    <div className="text-sm flex w-full flex-col items-start justify-center gap-4 bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
      <div className="releaseDate flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <CiCalendar></CiCalendar>
          <span className="font-semibold">Release Date</span>
        </h3>
        <p className="text-white">{formatDate(releaseDate)}</p>
      </div>
      <div className="availableLanguage flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <IoLanguage></IoLanguage>
          <span className="font-semibold">Availabel Language</span>
        </h3>
        <ul className="text-white gap-2 flex flex-wrap">
          {spokenLanguages?.map((lang) => (
            <li className="px-1.5 border border-gray-15 rounded-md py-0.5 bg-gray-08">
              {lang?.english_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="Ratings flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <FaRegStar></FaRegStar>
          <span className="font-semibold">Ratings</span>
        </h3>
        <ul className="text-white gap-2 flex flex-wrap">
          <li className="flex-col flex items-start gap-1 px-2.5 border border-gray-15 rounded-md py-1.5 bg-gray-08">
            <h2>Stream Vibe</h2>
            <div className="flex items-center justify-center gap-1">
              <StarRating
                voteAverage={voteAverage + 1}
                textSize={"text-sm"}
              ></StarRating>
              <p>{(voteAverage / 2 + 1).toFixed(2)}</p>
            </div>
          </li>
          <li className="flex-col flex items-start gap-1 px-2.5 border border-gray-15 rounded-md py-1.5 bg-gray-08">
            <h2>TMDB</h2>
            <div className="flex items-center justify-center gap-1">
              <StarRating
                voteAverage={voteAverage}
                textSize={"text-sm"}
              ></StarRating>
              <p>{(voteAverage / 2).toFixed(2)}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="genres flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <GrAppsRounded></GrAppsRounded>
          <span className="font-semibold">Gernes</span>
        </h3>
        <ul className="text-white gap-2 flex flex-wrap">
          {genres?.map((genre) => (
            <li className="px-1.5 border border-gray-15 rounded-md py-0.5 bg-gray-08">
              {genre?.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="otherInfo flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <IoMdDisc></IoMdDisc>
          <span className="font-semibold">Other Info</span>
        </h3>
        <ul className="text-white flex items-center justify-center gap-1">
          <li>{runTime} Min</li>
          <li className="text-gray-65">|</li>
          <li>{popularity} K</li>
        </ul>
      </div>
      <div className="dirctorAndSound w-full flex flex-col gap-4">
        {directorInfo?.length > 0 && (
          <div className="director flex-col flex gap-2">
            <h3 className="text-gray-60 font-semibold">
              <span className="font-semibold">Director</span>
            </h3>
            <div className="info px-2 border flex gap-2 border-gray-15 rounded-md py-2 w-full bg-gray-08">
              <img
                src={`${
                  directorInfo[0]?.profile_path
                    ? `https://image.tmdb.org/t/p/original/${directorInfo[0]?.profile_path}`
                    : person
                }`}
                alt={directorInfo[0]?.id}
                className="h-10 w-10 object-cover rounded-md object-top"
              />
              <div className="w-full">
                <h2 className="text-white">{directorInfo[0]?.name}</h2>
                <div className="text-sm flex items-center justify-start gap-0.5">
                  <AiFillThunderbolt className="text-gray-65"></AiFillThunderbolt>
                  <p className="text-gray-65">
                    {directorInfo[0]?.popularity.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {music?.length && (
          <div className="sound flex-col flex gap-2">
            <h3 className="text-gray-60 font-semibold ">
              <span className="font-semibold">Sound</span>
            </h3>
            <div className="info px-2 border flex gap-2 border-gray-15 rounded-md py-2 w-full bg-gray-08">
              <img
                src={`${
                  music[0]?.profile_path
                    ? `https://image.tmdb.org/t/p/original/${music[0]?.profile_path}`
                    : person
                }`}
                alt={directorInfo[0].id}
                className="h-10 w-10 object-cover rounded-md object-top"
              />
              <div className="w-full">
                <h2 className="text-white">{music[0]?.name}</h2>
                <div className="text-sm flex items-center justify-start gap-0.5">
                  <AiFillThunderbolt className="text-gray-65"></AiFillThunderbolt>
                  <p className="text-gray-65">
                    {music[0]?.popularity.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherInfo;
