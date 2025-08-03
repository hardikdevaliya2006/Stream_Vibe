const CallToActionWrap = () => {
  return (
    <section className="PricingSecationWrap pb-10 my-10">
      <div className="CtaContainer">
        <div
          className="responsive-banner flex lg:gap-8 gap-4 lg:flex-row flex-col items-center justify-center h-60 rounded-lg overflow-hidden border border-gray-15"
        >
          <div className="w-full lg:w-[68%] xl:w-[80%] flex lg:items-start items-center flex-col gap-2">
            <h3 className="text-white lg:text-start xl:text-4xl text-xl sm:text-2xl sm:font-semibold text-center">
              Start your free trial today!
            </h3>
            <p className="text-center xl:text-[1.1rem] lg:text-start lg:w-full w-[80%] text-gray-60 text-sm">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div className="actionBtn  cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 px-3 py-2 rounded-md">
            <button className="font-semibold lg:text-[1rem] sm:text-[1.1rem] text-[0.98rem] w-full cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionWrap;
