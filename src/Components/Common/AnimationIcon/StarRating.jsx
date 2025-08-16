import { FaStar } from "react-icons/fa";

const StarRating = ({ voteAverage, textSize }) => {
  const rating = voteAverage / 2;

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;

        if (rating >= starNumber) {
          return <FaStar key={index} className={`text-red-45 ${textSize}`}/>;
        } else {
          return <FaStar key={index} className={`text-gray-60 ${textSize}`}  />;
        }
      })}
    </div>
  );
};

export default StarRating;
