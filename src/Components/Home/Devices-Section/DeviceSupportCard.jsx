import { devices } from "../../../Helper/Devices";

const DeviceSupportCard = () => {
  return (
    <ul className="deviceSupportCardList grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {devices.map((card, index) => {
        return (
          <li
            key={index}
            className="flex cursor-pointer hover:border-red-45/80  transition-all duration-300 flex-col items-start justify-center gap-4 border bg-[linear-gradient(35deg,_#0F0F0F_70%,_rgba(255,0,0,0.15)_100%)] p-4 border-gray-15 rounded-lg"
          >
            <div className="heading flex items-center justify-start gap-2">
              <div className="svg border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 lg:h-11 h-10 lg:w-11 w-10">
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(
                    card.svg
                  )}`}
                  alt="deviceIcon"
                  className="h-6 lg:h-6.5 w-6 lg:w-6.5"
                />
              </div>
              <div className="headingName lg:text-[1.2rem] text-white">{card.name}</div>
            </div>
            <div className="subText text-gray-60 text-sm">
              {card.description}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DeviceSupportCard;
