import { Route, Routes } from "react-router";
import Home from "../Page/Home";
import MoviesAndTVShow from "../Page/MoviesAndTVShow";
import UpgradeSubscription from "../Page/UpgradeSubscription";
import Support from "../Page/Support";
import MoviesOpenPage from "../Page/MoviesOpenPage";
import TVShowOpenPage from "../Page/TVShowOpenPage";
import PlayMovieAndTV from "../Page/PlayMovieAndTV";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies-Shows" element={<MoviesAndTVShow />} />

      <Route path="/Movies-Shows/movie/:id" element={<MoviesOpenPage />} />
      <Route path="/Movies-Shows/tv/:id" element={<TVShowOpenPage />} />

      <Route
        path="/Movies-Shows/movie/:id/watch"
        element={<PlayMovieAndTV />}
      />
      <Route path="/Movies-Shows/tv/:id/watch" element={<PlayMovieAndTV />} />

      <Route path="/Support" element={<Support />} />
      <Route path="/Subscriptions" element={<UpgradeSubscription />} />
    </Routes>
  );
};

export default AppRouter;
