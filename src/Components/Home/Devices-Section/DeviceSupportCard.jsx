import { devices } from "../../../Helper/Devices";

const DeviceSupportCard = () => {
  return (
    <ul>
      {devices.map((card, index) => {
        return (
          <li key={index}>
            <div className="heading">
              <div className="svg"></div>
              <div className="headingName">{card.name}</div>
            </div>
            <div className="subText">{card.description}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default DeviceSupportCard;
