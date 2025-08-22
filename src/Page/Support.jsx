import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FrequentlyAskedQuestionsWrap from "../Components/Common/FAQs/FrequentlyAskedQuestionsWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import SupportFromWrap from "../Components/SupportFrom/SupportFromWrap";

const Support = () => {
  return (
    <main className="Support h-full">
      <div className="mainContant h-full">
        <header>
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:w-[78vw] lg:w-[80vw] lg:m-auto mx-4">
          <SupportFromWrap></SupportFromWrap>
          <FrequentlyAskedQuestionsWrap></FrequentlyAskedQuestionsWrap>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default Support;