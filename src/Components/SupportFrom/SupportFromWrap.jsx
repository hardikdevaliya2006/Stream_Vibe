import SecationHeader from "../Common/Secation-Header/SecationHeader";

const SupportFromWrap = () => {
  return (
    <section className="SupportFromWrap pb-4 my-10">
      <div className="flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={"Welcome to our support page!"}
            subText={
              "We're here to help you with any problems you may be having with our product."
            }
          />
        </div>
      </div>
      <div className="SupportSecation mt-5"></div>
    </section>
  );
};

export default SupportFromWrap;
