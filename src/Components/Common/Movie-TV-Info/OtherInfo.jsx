import { CiCalendar } from "react-icons/ci";
import React from "react";

const OtherInfo = ({
  budget,
  genres,
  director,
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
  return (
    <div className="text-sm flex flex-col items-start justify-center gap-2 bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
      <div className="releaseDate flex flex-col items-start justify-center gap-2">
        <h3 className="text-gray-60 font-semibold flex items-center justify-center gap-0.5">
          <CiCalendar></CiCalendar>
          <span className="font-semibold">Release Date</span>
        </h3>
        <p className="text-white">{formatDate(releaseDate)}</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default OtherInfo;
