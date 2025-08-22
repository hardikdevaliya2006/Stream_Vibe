import CallToActionWrap from "../Components/Common/CTA/CallToActionWrap";
import FooterWrap from "../Components/Common/Footer/FooterWrap";
import NavBarWrap from "../Components/Common/Navbar/NavBarWrap";
import PricingSecationWrap from "../Components/Common/Pricing-Section/PricingSecationWrap";
import UpgradeSubscriptionTableWrap from "../Components/Upgrade-Subscription/UpgradeSubscriptionTableWrap";

const UpgradeSubscription = () => {
  return (
    <main className="Support h-full">
      <div className="mainContant h-full">
        <header>
          <NavBarWrap></NavBarWrap>
        </header>
        <div className="Main xl:w-[78vw] lg:w-[80vw] lg:m-auto mx-4">
          <PricingSecationWrap></PricingSecationWrap>
          <UpgradeSubscriptionTableWrap></UpgradeSubscriptionTableWrap>
          <CallToActionWrap></CallToActionWrap>
        </div>
        <footer>
          <FooterWrap></FooterWrap>
        </footer>
      </div>
    </main>
  );
};

export default UpgradeSubscription;