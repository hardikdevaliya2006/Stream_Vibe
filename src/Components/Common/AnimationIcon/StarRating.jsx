import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ voteAverage }) => {
  // Convert 10-point rating to 5-star rating
  const rating = voteAverage / 2;

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;

        if (rating >= starNumber) {
          return <FaStar key={index} className="text-red-45 text-[0.725rem] lg:text-sm" />;
        } else {
          return <FaStar key={index} className="text-gray-60 text-[0.725rem] lg:text-sm"  />;
        }
      })}
    </div>
  );
};

export default StarRating;
