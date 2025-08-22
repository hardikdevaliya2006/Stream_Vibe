import SecationHeader from "../Common/Secation-Header/SecationHeader";
import UpgradeSubscriptionTable from "./UpgradeSubscriptionTable";

const UpgradeSubscriptionTableWrap = () => {
  return (
    <section className="UpgradeSubscription pb-4 my-10">
      <div className="flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={"Compare our plans and find the right one for you"}
            subText={
              "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
            }
          />
        </div>
      </div>
      <div className="UpgradeSubscriptionTable mt-5">
        <UpgradeSubscriptionTable></UpgradeSubscriptionTable>
      </div>
    </section>
  );
};

export default UpgradeSubscriptionTableWrap;
