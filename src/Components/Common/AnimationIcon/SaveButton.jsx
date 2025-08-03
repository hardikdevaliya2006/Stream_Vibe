import { motion } from "framer-motion";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const SaveButton = () => {
  const [saved, setSaved] = useState(false);

  return (
    <motion.button
      onClick={() => setSaved(!saved)}
      whileTap={{ scale: 0.9, rotate: -15 }}
      className="text-xl text-white"
    >
      {saved ? (
        <BsBookmarkFill className="text-gray-400 text-[1rem]" />
      ) : (
        <BsBookmark className="text-gray-400 text-[1rem]" />
      )}
    </motion.button>
  );
};

export default SaveButton;