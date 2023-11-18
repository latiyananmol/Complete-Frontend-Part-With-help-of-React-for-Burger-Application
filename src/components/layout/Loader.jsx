import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },

   // animate: { opacity: 1 },
    transition: {
      ease: "linear",
      delay: 1,
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };

  return (
    <div className="loader">
      <IoFastFoodOutline />
      <div>
        {/* <motion.p {...options}></motion.p> */}
        <h1 >Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
