import { Route, Routes } from "react-router";
import Home from "../Page/Home";
import MoviesAndTVShow from "../Page/MoviesAndTVShow";
import UpgradeSubscription from "../Page/UpgradeSubscription";
import Support from "../Page/Support";
import MoviesOpenPage from "../Page/MoviesOpenPage";
import TVShowOpenPage from "../Page/TVShowOpenPage";
import PlayTV from "../Page/PlayTV";
import PlayMovie from "../Page/PlayMovie";
import ScrollToTop from "./ScrollToTop";
import Login from "../Page/Login";
import SingUp from "../Page/SingUp";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Protected Routes */}

        {/* Public Routes */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<SingUp />}></Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/Movies-Shows" element={<MoviesAndTVShow />} />

        <Route path="/Movies-Shows/movie/:id" element={<MoviesOpenPage />} />
        <Route path="/Movies-Shows/tv/:id" element={<TVShowOpenPage />} />

        <Route path="/Movies-Shows/movie/:id/watch" element={<PlayMovie />} />
        <Route path="/Movies-Shows/tv/:id/:s/:e/watch" element={<PlayTV />} />

        <Route path="/Support" element={<Support />} />
        <Route path="/Subscriptions" element={<UpgradeSubscription />} />
      </Routes>
    </>
  );
};

export default AppRouter;
