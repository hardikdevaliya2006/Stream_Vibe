import { useState } from "react";
import { useLocation } from "react-router";

const TVPlayer = () => {
  const locationTemp = useLocation();
  const location = locationTemp.pathname.split("/");
  const type = location[2];
  const id = location[3];

  const servers = [
    {
      name: "VidFast",
      url: "https://vidfast.pro/tv/",
      img: `/Icons/streming.png`,
    },
    {
      name: "VidSrc XYZ",
      url: "https://vidsrc.xyz/embed/tv/",
      img: `/Icons/vidsrcxyz.png`,
    },
    {
      name: "VidSrc CC",
      url: "https://vidsrc.cc/v3/embed/tv/",
      img: `/Icons/vidscrccc.png`,
    },
    {
      name: "111Movies",
      url: "https://111movies.com/tv/",
      img: `/Icons/111movies.png`,
    },
    {
      name: "AutoEmbed",
      url: "https://player.autoembed.cc/embed/tv/",
      img: `/Icons/AutoEmbed.png`,
    },
    {
      name: "MoviesAPI",
      url: "https://moviesapi.club/tv/",
      img: `/Icons/vidfast.png`,
    },
    {
      name: "VidLink",
      url: "https://vidlink.pro/tv/",
      img: `/Icons/vidlink.png`,
    },
    {
      name: "VidSrc ICU",
      url: "https://vidsrc.icu/embed/tv/",
      img: `/Icons/vidsrcicu.png`,
    },
  ];

  const [currentServer, setCurrentServer] = useState(servers[0].url);
  const currentSeason = location[4];
  const currentEpisode = location[5];

  return (
    <div className="movie-player w-full space-y-4">
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`${currentServer}${id}/${currentSeason}/${currentEpisode}`}
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
      <div className="my-12 w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        {servers.map((server, index) => (
          <button
            key={index}
            onClick={() => setCurrentServer(server.url)}
            className={`flex items-center justify-between w-full px-5 py-3 rounded-lg border transition ${
              currentServer === server.url
                ? "bg-gray-15 border-gray-20 text-white"
                : "bg-gray-10 border-gray-15 text-gray-300 hover:bg-gray-15"
            }`}
          >
            <div className="text-left flex items-center justify-start gap-2">
              <div className="servername">
                <img src={server.img} alt="dfdf" className="h-10 w-10" />
              </div>
              <div>
                <div className="name">
                  <h3 className="font-medium text-sm">{server.name}</h3>
                  <p className="text-xs text-gray-65">Streaming Server</p>
                </div>
              </div>
            </div>
            <div className="status">
              <span
                className="inline-block align-middle rounded-full"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 0 2px rgba(34,197,94,.25)",
                  animation:
                    "dot-blink 1.6s ease-in-out infinite, dot-glow 2.4s ease-in-out infinite",
                  transformOrigin: "center",
                }}
                aria-label="Online"
                title="Online"
              ></span>
              <style>{`
                    @keyframes dot-blink {
                      0%,100% { transform: scale(.9); opacity:.85; }
                      50%     { transform: scale(1.08); opacity:1; }
                    }
                    @keyframes dot-glow {
                      0%   { box-shadow:0 0 0 0 rgba(34,197,94,.6); }
                      70%  { box-shadow:0 0 0 8px rgba(34,197,94,0); }
                      100% { box-shadow:0 0 0 0 rgba(34,197,94,0); }
                    }
                  `}</style>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TVPlayer;
