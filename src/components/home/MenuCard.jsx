import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, price, title,burgerSrc,handler,delay=0 }) => {
  return (
    <motion.div
    transition={{
   delay
    }}
    initial={
      {
        x:"-100%",
        opacity:0
      }
    }
    whileInView={{
      x:"0",
      opacity:1
    }}
    
     className="menuCard">
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={()=>handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
