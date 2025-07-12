import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

const MobileMenuWrap = ({ isOpen }) => {
  const menuVariants = {
    hidden: {
      y: "-5%",
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      y: "-5%",
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-14 left-0 w-full flex items-center justify-center text-white z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <div className="p-2 w-[92%] rounded-lg border-2 border-gray-15 bg-gray-10">
            <ul className="flex flex-col gap-1.5 w-full items-start justify-center">
              <li className="w-full">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex w-full bg-gray-15 rounded-md px-2.5 py-1.5"
                      : "text-gray-75 w-full px-2.5 py-1.5"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to={"/Movies-Shows"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex w-full bg-gray-10 rounded-xl px-2.5 py-1.5"
                      : "text-gray-75 w-full px-2.5 py-1.5"
                  }
                >
                  Movies & Shows
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to={"/Support"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex w-full bg-gray-10 rounded-md px-2.5 py-1.5"
                      : "text-gray-75 w-full px-2.5 py-1.5"
                  }
                >
                  Support
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to={"/Subscriptions"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex w-full bg-gray-10 rounded-md px-2.5 py-1.5"
                      : "text-gray-75 w-full px-2.5 py-1.5"
                  }
                >
                  Subscriptions
                </NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuWrap;
