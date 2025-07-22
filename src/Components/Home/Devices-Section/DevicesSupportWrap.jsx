import SecationHeader from "../../Common/Secation-Header/SecationHeader";
import DeviceSupportCard from "./deviceSupportCard";

const DevicesSupportWrap = () => {
  return (
    <section className="DevicesSupportWrap pb-4">
      <div className="HeaderTextAndNavigotr flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={
              "We Provide you streaming experience across various devices."
            }
            subText={
              "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.\n Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
            }
          />
        </div>
      </div>
      <div className="deviceSupportCard">
        <DeviceSupportCard></DeviceSupportCard>
      </div>
    </section>
  );
};

export default DevicesSupportWrap;
