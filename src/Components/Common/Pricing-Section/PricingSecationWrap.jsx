import SecationHeader from "../Secation-Header/SecationHeader";
import PricingSecation from "./PricingSecation";

const PricingSecationWrap = () => {
  return (
    <section className="PricingSecationWrap pb-4 my-10">
      <div className="flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={"Choose the plan that's right for you"}
            subText={
              "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            }
          />
        </div>
      </div>
      <div className="PricingSecation mt-5">
        <PricingSecation></PricingSecation>
      </div>
    </section>
  );
};

export default PricingSecationWrap;
