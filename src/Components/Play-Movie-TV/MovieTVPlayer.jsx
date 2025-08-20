import { useState } from "react";
import { useLocation } from "react-router";

const MovieTVPlayer = () => {
  const locationTemp = useLocation();
  const location = locationTemp.pathname.split("/");
  const type = location[2];
  const id = location[3];
  const servers = [
    { name: "VidSrc XYZ", url: "https://vidsrc.xyz/embed/movie/" },
    { name: "VidSrc CC", url: "https://vidsrc.cc/v3/embed/movie/" },
    { name: "VidFast", url: "https://vidfast.pro/movie/" },
    { name: "111Movies", url: "https://111movies.com/movie/" },
    { name: "AutoEmbed", url: "https://player.autoembed.cc/embed/movie/" },
    { name: "MoviesAPI", url: "https://moviesapi.club/movie/" },
    { name: "VidLink", url: "https://vidlink.pro/movie/" },
    { name: "VidSrc ICU", url: "https://vidsrc.icu/embed/movie/" },
  ];

  // Default server
  const [currentServer, setCurrentServer] = useState(servers[0].url);

  return (
    <div className="movie-player space-y-4">
      {/* Server Switcher */}
      <div className="flex gap-2 flex-wrap">
        {servers.map((server, index) => (
          <button
            key={index}
            onClick={() => setCurrentServer(server.url)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentServer === server.url
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {server.name}
          </button>
        ))}
      </div>

      {/* Player */}
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`${currentServer}${id}`}
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTVPlayer;
