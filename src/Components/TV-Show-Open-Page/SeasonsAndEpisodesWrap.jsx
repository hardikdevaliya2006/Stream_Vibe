import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FiArrowDown } from "react-icons/fi";
import { fetchSeasonsAndEpisodes } from "../../Store/Actions/fetchSeasonsAndEpisodes.action";
import { AnimatePresence, motion } from "framer-motion";
import playIcon from "../../../public/Icons/play.svg";

const SeasonsAndEpisodesWrap = ({ tvId, seasonsAndEp }) => {
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

  console.log(episodeData);

  return (
    <section className="episodeAndSeasonListWraper flex gap-4 flex-col bg-gray-10 backdrop-blur-2xl border border-gray-15 p-4 rounded-md">
      <h1 className="text-gray-60 text-sm font-semibold">
        Seasons and Episodes
      </h1>

      <div className="episodeAndSeasonListWrap">
        <ul className="flex-col flex gap-2">
          {episodeData
            .filter((s) => s.episodes?.length > 2)
            .map((s) => (
              <li key={s.season_number}>
                <div className="flex flex-col">
                  <div
                    onClick={() => toggleSeason(s.season_number)}
                    className={`cursor-pointer bg-gray-06 text-sm border border-gray-15 flex justify-between items-center px-4 py-4 ${
                      openSeason === s.seaseason_numberson
                        ? "rounded-t-md border-b-0"
                        : "rounded-md"
                    }`}
                  >
                    <div className="seasonNumber flex items-center gap-1.5">
                      <h2 className="text-white">Season 0{s.season_number}</h2>
                      <p className="text-gray-60 text-[0.725rem]">
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
                            className="episodeList cursor-pointer flex-col flex gap-2 px-2 py-2 border-b border-gray-15 last:border-0"
                          >
                            <div className="episodeNumberAndPoster flex items-center xss:items-start justify-between">
                              <div className="poster relative border border-gray-15 rounded-md overflow-hidden">
                                <img
                                  src={`https://image.tmdb.org/t/p/w500/${ep.still_path}`}
                                  alt={ep.name}
                                  className="w-120 xl:w-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="playIcon p-2 z-10 rounded-full bg-black/50">
                                    <img
                                      src={playIcon}
                                      alt="play"
                                      className="w-6 h-6"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="episodeNumber flex xss:gap-2 h-full xss:items-start xss:flex-col xss:justify-start xss:pl-3 items-center justify-center w-full">
                                <div className="epName flex items-center justify-center gap-2">
                                  <h2 className="text-xl font-semibold text-gray-60">
                                    {ep.episode_number > 9 ? "" : "0"}
                                    {ep.episode_number}
                                  </h2>
                                  <h3 className="capitalize hidden xss:text-xl xss:flex text-white">
                                    {ep.name}
                                  </h3>
                                </div>
                                <div className="polt hidden xss:flex">
                                  <p className="text-sm line-clamp-3  text-gray-60">
                                    {ep.overview}
                                  </p>
                                </div>
                                <div className="EpisodeLength hidden xss:flex border border-gray-15 rounded-md w-fit text-sm text-gray-65 gap-1 items-center p-1">
                                  <IoTimeOutline />
                                  <p>{ep.runtime} Min</p>
                                </div>
                              </div>
                            </div>

                            <div className="EpisodeLength xss:hidden border border-gray-15 rounded-md w-fit text-sm text-gray-65 flex gap-1 items-center p-1">
                              <IoTimeOutline />
                              <p>{ep.runtime} Min</p>
                            </div>

                            <div className="episodeName px-1 xss:hidden text-white">
                              <h3 className="capitalize">{ep.name}</h3>
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
