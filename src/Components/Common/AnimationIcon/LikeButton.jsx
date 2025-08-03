import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button
      onClick={() => setLiked(!liked)}
      whileTap={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-[1rem]"
    >
      {liked ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-gray-400" />
      )}
    </motion.button>
  );
};

export default LikeButton;