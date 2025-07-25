import plans from "../../../Helper/PricingPlanCards";

const PricingSecation = () => {
  return (
    <div>
      <div className="plan lg:grid-cols-3 grid grid-cols-1 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="card border-gray-15 rounded-lg p-4 flex flex-col items-start justify-center gap-2 border bg-gray-10"
          >
            <div className="planName text-white md:text-2xl lg:font-semibold lg:text-xl text-xl">
              <h3>{plan.name}</h3>
            </div>
            <div>
              <p className="text-sm planDescription md:text-[1rem] lg:text-sm text-gray-60">
                {plan.description}
              </p>
            </div>
            <div className="flex lg:font-semibold gap-0.5">
              <div className="text-white flex md:text-2xl text-xl">
                <span>$</span>
                <p>{plan.price}</p>
              </div>
              <div className="text-sm flex items-end text-gray-60">
                <span>/</span>
                <p>{plan.period}</p>
              </div>
            </div>
            <div className="grid xl:grid-rows-1 xl:grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 grid-cols-2 mt-2 w-full gap-4">
              <div className="actionBtn w-full border-gray-15 border cursor-pointer flex justify-center items-center gap-2 text-white bg-gray-08 px-3 py-2 rounded-md">
                <button className="font-semibold lg:text-[1rem] sm:text-[1.1rem] text-[0.95rem] w-full cursor-pointer">
                  Start Free Trial
                </button>
              </div>
              <div className="actionBtn w-full cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 px-3 py-2 rounded-md">
                <button className="font-semibold lg:text-[1rem] sm:text-[1.1rem] text-[0.98rem] w-full cursor-pointer">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSecation;
