import { Route, Routes } from "react-router";
import Home from "../Page/Home";
import MoviesAndTVShow from "../Page/MoviesAndTVShow";
import UpgradeSubscription from "../Page/UpgradeSubscription";
import Support from "../Page/Support";
import MoviesOpenPage from "../Page/MoviesOpenPage";
import TVShowOpenPage from "../Page/TVShowOpenPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route
        path={"/Movies-Shows"}
        element={<MoviesAndTVShow></MoviesAndTVShow>}
      />
      <Route
        path={"/movie/:id"}
        element={<MoviesOpenPage></MoviesOpenPage>}
      ></Route>
      <Route
        path={"/tv/:id"}
        element={<TVShowOpenPage></TVShowOpenPage>}
      ></Route>
      <Route path={"/Support"} element={<Support></Support>} />
      <Route
        path={"/Subscriptions"}
        element={<UpgradeSubscription></UpgradeSubscription>}
      />
    </Routes>
  );
};

export default AppRouter;
