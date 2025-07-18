import { useSelector } from "react-redux";
import AppRouter from "./Router/AppRouter";
import StreamVibeSppiner from "./Components/Common/Loader/StreamVibeSppiner";

const App = () => {
  const { genresLoading } = useSelector((state) => state.tmdbGenreWithMovies);
  return (
    <>
      {!!genresLoading && <StreamVibeSppiner></StreamVibeSppiner>}
      <AppRouter></AppRouter>;
    </>
  );
};

export default App;
