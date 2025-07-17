import { IoArrowForwardOutline,  IoArrowBackOutline} from "react-icons/io5";

const Navigator = () => {
  return (
    <div className="NavigatorWrap flex items-start justify-end w-full">
      <div className="Navigtor flex items-center justify-center p-1 w-fit gap-1 text-white border-1 border-gray-15 rounded-xl bg-gray-06">
        <div className="LeftArrow p-2 border-1 border-gray-15 rounded-md bg-gray-10 w-fit">
            <IoArrowBackOutline></IoArrowBackOutline>
        </div>
        <div className="Lines flex items-center justify-center gap-1">
            <div className="bg-red-45 h-1 rounded-full w-5"></div>
            <div className="bg-gray-20 h-1 rounded-full w-5"></div>
            <div className="bg-gray-20 h-1 rounded-full w-5"></div>
        </div>
        <div className="RightArrow p-2 border-1 border-gray-15 rounded-md bg-gray-10 w-fit">
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
