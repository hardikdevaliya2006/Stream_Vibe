import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FrequentlyAskedQuestionsWrap from "../Components/Common/FAQs/FrequentlyAskedQuestionsWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import PricingSecationWrap from "../Components/Common/Pricing-Section/PricingSecationWrap";
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
          <PricingSecationWrap></PricingSecationWrap>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default Home;