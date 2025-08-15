import React from "react";

const Description = ({ text }) => {
  return (
    <div className="text-sm flex flex-col items-start justify-center gap-2 bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
      <h3 className="text-gray-60 font-semibold">Description</h3>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Description;
