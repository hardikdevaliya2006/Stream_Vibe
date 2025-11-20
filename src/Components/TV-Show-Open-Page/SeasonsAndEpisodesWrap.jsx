import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FiArrowDown } from "react-icons/fi";
import { fetchSeasonsAndEpisodes } from "../../Store/Actions/fetchSeasonsAndEpisodes.action";
import { AnimatePresence, motion } from "framer-motion";
import playIcon from "../../../public/Icons/play.svg";
import { useNavigate } from "react-router";

const SeasonsAndEpisodesWrap = ({ tvId, seasonsAndEp, detailsDataLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (tvId && seasonsAndEp?.length > 0) {
      dispatch(fetchSeasonsAndEpisodes({ tvId, seasons: seasonsAndEp }));
    }
  }, [dispatch, tvId, seasonsAndEp]);

  const { episodeData, episodeDataLoading, error } = useSelector(
    (state) => state.episodeData
  );

  const [openSeason, setOpenSeason] = useState(null);

  const toggleSeason = (season) => {
    setOpenSeason(openSeason === season ? null : season);
  };

  const navigate = useNavigate();

  const handleEpisodeClick = (season, episode) => {
    navigate(`/Movies-Shows/tv/${tvId}/${season}/${episode}/watch`);
  };

  if (episodeDataLoading || detailsDataLoading) {
    return (
      <section className="episodeAndSeasonListWraper flex gap-4 flex-col bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
        <h1 className="animate-pulse bg-gray-30 h-4 w-20 rounded-full"></h1>
        <ul className="flex-col flex gap-2">
          <li className="bg-gray-30 rounded-md animate-pulse border border-gray-15 px-4 py-6"></li>
          <li className="bg-gray-30 rounded-md animate-pulse border border-gray-15 px-4 py-6"></li>
          <li className="bg-gray-30 rounded-md animate-pulse border border-gray-15 px-4 py-6"></li>
        </ul>
      </section>
    );
  }

  return (
    <section className="episodeAndSeasonListWraper flex gap-4 flex-col bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
      <h1 className="text-gray-60 text-sm font-semibold">
        Seasons and Episodes
      </h1>

      <div className="episodeAndSeasonListWrap">
        <ul className="flex-col flex gap-2">
          {episodeData
            .filter((s) => s.episodes?.length > 1)
            .map((s) => (
              <li key={s.season_number}>
                <div className="flex flex-col">
                  <div
                    onClick={() => toggleSeason(s.season_number)}
                    className={`cursor-pointer bg-gray-06 text-sm border border-gray-15 flex justify-between items-center px-4 py-4 ${
                      openSeason === s.season_number
                        ? "rounded-t-md border-b-0"
                        : "rounded-md"
                    }`}
                  >
                    <div className="seasonNumber flex items-center gap-1.5">
                      <h2 className="text-white md:text-[1.1rem]">
                        Season 0{s.season_number}
                      </h2>
                      <p className="text-gray-60 md:text-sm text-[0.725rem]">
                        {s.episode_count} Episode
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: openSeason === s.season_number ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="dropDownIcon bg-gray-08 border border-gray-15 rounded-full w-fit p-2"
                    >
                      <FiArrowDown className="text-gray-60" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openSeason === s.season_number && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex-col flex bg-gray-06 border border-t-0 border-gray-15 rounded-b-md overflow-hidden"
                      >
                        {s.episodes.map((ep) => (
                          <li
                            key={ep.id}
                            // onClick={() =>
                            //   handleEpisodeClick(
                            //     s.season_number,
                            //     ep.episode_number
                            //   )
                            // }
                            className="episodeList cursor-pointer flex-col flex gap-2 px-2 py-2 border-b border-gray-15 last:border-0"
                          >
                            <div className="episodeNumberAndPoster flex items-center xss:items-start justify-between">
                              <div className="poster  relative border border-gray-15 rounded-md overflow-hidden">
                                <img
                                  src={`${
                                    ep.still_path
                                      ? `https://image.tmdb.org/t/p/w500/${ep.still_path}`
                                      : "/img/notFound.jpeg"
                                  }`}
                                  alt={ep.name}
                                  className="w-70 md:w-70 xl:w-58"
                                />
                                {ep.still_path && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="playIcon p-2 z-10 rounded-full bg-black/50">
                                      <img
                                        src={playIcon}
                                        alt="play"
                                        className="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="episodeNumber flex xss:gap-2 h-full xss:items-start xss:flex-col xss:justify-start pl-3 items-center justify-center w-full">
                                <div className="epName flex items-center justify-center md:justify-between w-full gap-2">
                                  <div className="epnumberAndName flex gap-2 w-full items-start md:items-center md:w-fit">
                                    <h2 className="text-xl font-semibold text-gray-60 flex-shrink-0">
                                      {ep.episode_number > 9 ? "" : "0"}
                                      {ep.episode_number}
                                    </h2>
                                    <div className="flex-1 min-w-0 max-w-[100px] md:max-w-[300px]">
                                      <h3 className="capitalize hidden xss:text-xl xss:block line-clamp-1 text-white break-words overflow-hidden text-ellipsis whitespace-nowrap">
                                        {ep.name}
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="EpisodeLength md:flex hidden border border-gray-15 rounded-md w-fit text-sm text-gray-65 gap-1 items-center p-1">
                                    <IoTimeOutline />
                                    {!ep.runtime ? (
                                      "Coming Soon"
                                    ) : (
                                      <p>{ep.runtime} Min</p>
                                    )}
                                  </div>
                                </div>
                                <div className="polt hidden xss:flex">
                                  <p className="text-sm line-clamp-2  text-gray-60">
                                    {ep.overview}
                                  </p>
                                </div>
                                <div className="EpisodeLength md:hidden hidden xss:flex border border-gray-15 rounded-md w-fit text-sm text-gray-65 gap-1 items-center p-1">
                                  <IoTimeOutline />
                                  {!ep.runtime ? (
                                    "Coming Soon"
                                  ) : (
                                    <p>{ep.runtime} Min</p>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="EpisodeLength xss:hidden border border-gray-15 rounded-md w-fit text-sm text-gray-65 flex gap-1 items-center p-1">
                              <IoTimeOutline />
                              {!ep.runtime ? (
                                "Coming Soon"
                              ) : (
                                <p>{ep.runtime} Min</p>
                              )}
                            </div>

                            <div className="episodeName px-1 xss:hidden block text-white">
                              <h3 className="capitalize text-base line-clamp-1">
                                {ep.name}
                              </h3>
                            </div>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SeasonsAndEpisodesWrap;
