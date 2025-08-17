import React from "react";

const Trailer = ({ videos }) => {
  const trailer = videos?.results?.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );

  if (!trailer) return <p>No trailer available</p>;
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailer.key}?modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
