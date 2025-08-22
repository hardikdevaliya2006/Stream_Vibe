import React, { useState } from "react";

const UpgradeSubscriptionTable = () => {
  const [selected, setSelected] = useState("Standard");

  const plans = ["Basic", "Standard", "Premium"];

  return (
    <section className="flex flex-col gap-4">
      <div className="header w-full relative">
        <ul className="bg-gray-06 p-1 gap-2 border-2 rounded-md border-gray-15 text-sm w-full grid grid-cols-3 items-center justify-center relative overflow-hidden">
          <div
            className="absolute top-1 bottom-1 rounded-md bg-gray-15 transition-all duration-300 ease-in-out"
            style={{
              left: `calc(${plans.indexOf(selected) * 33.333}% + 2%)`,
              width: "calc(33.333% - 4%)",
            }}
          ></div>

          {plans.map((plan) => (
            <li
              key={plan}
              onClick={() => setSelected(plan)}
              className="relative z-10 text-white flex items-center justify-center p-2 rounded-md cursor-pointer select-none"
            >
              <h3>{plan}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-06 flex flex-col p-2 gap-4 border-2 rounded-md border-gray-15 text-sm w-full">
        <div className="PriceAndDay grid grid-cols-2">
          <div className="Price flex flex-col items-start justify-center">
            <h3 className="text-gray-65">Price</h3>
            <p className="text-white"></p>
          </div>
          <div className="day flex flex-col items-start justify-center">
            <h3 className="text-gray-65">Free Trial</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="Contant">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-gray-65">Contant</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="Devices">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-gray-65">Devices</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="CancelAndHDR  grid grid-cols-2">
          <div className="Price flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">Cancel</h3>
            <p className="text-white"></p>
          </div>
          <div className="day flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">HDR</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="dolbyAndAD  grid grid-cols-2">
          <div className="Price flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">Dolby Atmost</h3>
            <p className="text-white"></p>
          </div>
          <div className="day flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">Ad Free</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="offlineAndFamily grid grid-cols-2">
          <div className="Price flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">Offline Viwing</h3>
            <p className="text-white"></p>
          </div>
          <div className="day flex flex-col items-start justify-center gap-2">
            <h3 className="text-gray-65">Familiy Sharing</h3>
            <p className="text-white"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeSubscriptionTable;
