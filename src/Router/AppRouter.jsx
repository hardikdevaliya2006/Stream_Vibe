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
import UserProfile from "../Page/UserProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateUserName from "../Components/UserData/UpdateUserName";
import ForgotPassword from "../Components/UserData/ForgotPassword";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Protected Routes */}
        {/* <Route
          path="/Movies-Shows/movie/:id/watch"
          element={
            <PrivateRoute>
              <PlayMovie />
            </PrivateRoute>
          }
        />
        <Route
          path="/Movies-Shows/tv/:id/:s/:e/watch"
          element={
            <PrivateRoute>
              <PlayTV />
            </PrivateRoute>
          }
        /> */}

        {/* Public Routes */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<SingUp />}></Route>
        <Route path="/:userName" element={<UserProfile />}></Route>

        <Route path="/" element={<Home />} />
        <Route path="/Movies-Shows" element={<MoviesAndTVShow />} />

        <Route path="/Movies-Shows/movie/:id" element={<MoviesOpenPage />} />
        <Route path="/Movies-Shows/tv/:id" element={<TVShowOpenPage />} />

        <Route path="/Support" element={<Support />} />
        <Route path="/Subscriptions" element={<UpgradeSubscription />} />

        <Route path="/update-user" element={<UpdateUserName />}></Route>
        <Route path="/forgot-Password" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;