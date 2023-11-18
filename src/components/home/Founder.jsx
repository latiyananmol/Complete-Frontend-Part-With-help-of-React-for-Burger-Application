import React from "react";
import { motion } from "framer-motion";
import anmol from "../../assets/anmol.jpeg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: "0%",
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img
          src={anmol}
          alt="this is img of founder"
          height={200}
          width={200}
        />
        <h3>Anmol Latiyan</h3>
        <p>
          Hey, Everyone I am Anmol Latiyan , the founder of MBA Burger Wala
          <br />
          Our aim is to create the most Tasty Burger on Planet
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
