import { useState } from "react";
import plans from "../../Helper/PricingPlanTable";

const UpgradeSubscriptionTable = () => {
  const [selected, setSelected] = useState(plans[0].name);
  const selectedIndex = plans.findIndex((plan) => plan.name === selected);
  const selectedPlan = plans[selectedIndex];
  const featureKeys = Object.keys(plans[0].features);

  return (
    <>
      <section className="flex lg:hidden flex-col gap-4">
        <div className="header w-full relative">
          <ul className="bg-gray-06 p-1 gap-2 border-2 rounded-lg border-gray-15 text-sm w-full grid grid-cols-3 items-center justify-center relative overflow-hidden">
            <div
              className="absolute top-1 bottom-1 rounded-md bg-gray-15 transition-all duration-300 ease-in-out"
              style={{
                left: `calc(${selectedIndex * 33.333}% + 2%)`,
                width: "calc(33.333% - 4%)",
              }}
            ></div>

            {plans.map((plan) => (
              <li
                key={plan.name}
                onClick={() => setSelected(plan.name)}
                className="relative z-10 text-white flex items-center justify-center p-2 rounded-md cursor-pointer select-none"
              >
                <h3>{plan.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-06 flex flex-col p-4 gap-4 border-2 rounded-lg border-gray-15 text-sm w-full">
          <div className="PriceAndDay grid grid-cols-2">
            <div className="Price flex flex-col items-start justify-center">
              <h3 className="text-gray-65">Price</h3>
              <p className="text-white">{selectedPlan.price}</p>
            </div>
            <div className="day flex flex-col items-start justify-center">
              <h3 className="text-gray-65">Free Trial</h3>
              <p className="text-white">{selectedPlan.features.FreeTrial}</p>
            </div>
          </div>
          <div className="Contant">
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-gray-65">Contant</h3>
              <p className="text-white">{selectedPlan.features.Content}</p>
            </div>
          </div>
          <div className="Devices">
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-gray-65">Devices</h3>
              <p className="text-white">{selectedPlan.features.Devices}</p>
            </div>
          </div>
          <div className="CancelAndHDR  grid grid-cols-2">
            <div className="Price flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">Cancel</h3>
              <p className="text-white">
                {selectedPlan.features.CancelAnytime}
              </p>
            </div>
            <div className="day flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">HDR</h3>
              <p className="text-white">{selectedPlan.features.HDR}</p>
            </div>
          </div>
          <div className="dolbyAndAD  grid grid-cols-2">
            <div className="Price flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">Dolby Atmost</h3>
              <p className="text-white">{selectedPlan.features.DolbyAtmos}</p>
            </div>
            <div className="day flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">Ad Free</h3>
              <p className="text-white">{selectedPlan.features.AdFree}</p>
            </div>
          </div>
          <div className="offlineAndFamily grid grid-cols-2">
            <div className="Price flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">Offline Viwing</h3>
              <p className="text-white">
                {selectedPlan.features.OfflineViewing}
              </p>
            </div>
            <div className="day flex flex-col items-start justify-center gap-2">
              <h3 className="text-gray-65">Familiy Sharing</h3>
              <p className="text-white">
                {selectedPlan.features.FamilySharing}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto lg:inline-block hidden border rounded-lg border-gray-15 overflow-hidden">
        <table className="w-full rounded-lg overflow-hidden text-left">
          <thead>
            <tr>
              <th className="border border-gray-15 bg-gray-06 text-white p-3">Plan</th>
              {plans.map((plan, idx) => (
                <th key={idx} className="border bg-gray-06 border-gray-15 p-3">
                  <div>
                    <span className="text-white">{plan.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((featureKey, rowIdx) => (
              <tr key={rowIdx}>
                <td className="border text-gray-65 border-gray-15 p-3">
                  {featureKey}
                </td>
                {plans.map((plan, colIdx) => (
                  <td
                    key={colIdx}
                    className="border text-gray-65 border-gray-15 p-3"
                  >
                    {plan.features[featureKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpgradeSubscriptionTable;
