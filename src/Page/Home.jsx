import FrequentlyAskedQuestionsWrap from "../Components/Common/FAQs/FrequentlyAskedQuestionsWrap";
import DevicesSupportWrap from "../Components/Home/Devices-Section/DevicesSupportWrap";
import HeroSecationWrap from "../Components/Home/Hero-Section/HeroSecationWrap";
import { MoviesGenerWrap } from "../Components/Home/Movie-Categories/MoviesGenerWrap";

const Home = () => {
  return (
    <main className="homePage h-full">
      <div className="mainContant h-full">
        <header>
          <HeroSecationWrap />
        </header>
        <div className="Main xl:w-[78vw] lg:w-[80vw] lg:m-auto mx-4">
          <MoviesGenerWrap></MoviesGenerWrap>
          <DevicesSupportWrap></DevicesSupportWrap>
          <FrequentlyAskedQuestionsWrap></FrequentlyAskedQuestionsWrap>
        </div>
        <footer></footer>
      </div>
    </main>
  );
};

export default Home;
