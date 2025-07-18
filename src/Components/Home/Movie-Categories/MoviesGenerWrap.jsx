import { GenreSliderProvider } from "../../../context/GenreSliderContext";
import SecationHeader from "../../Common/Secation-Header/SecationHeader";
import MoviesCategoryCardWrap from "./MoviesCategoryCardWrap";
import Navigator from "./Navigator";

export const MoviesGenerWrap = () => {
  return (
    <GenreSliderProvider>
      <section className="MoviesGenerWrap pb-4 my-10">
        <div className="HeaderTextAndNavigotr flex w-full">
          <div className="HeaderText w-full lg:w-[75%]">
            <SecationHeader
              mainText={"Explore our wide variety of categories"}
              subText={
                "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
              }
            />
          </div>
          <div className="Navigotr w-0 hidden lg:flex lg:w-[25%]">
            <Navigator />
          </div>
        </div>
        <div className="MoviesCategoryCard mt-5 w-full">
          <MoviesCategoryCardWrap />
        </div>
      </section>
    </GenreSliderProvider>
  );
};
