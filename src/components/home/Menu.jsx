import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


const Menu = () => {
  const addToCartHandler = ({ itemNum }) => {
    console.log("ADDTOCARTHANDLER");
  };
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          handler={addToCartHandler}
          title={"Cheese Burger"}
          delay={0.1}
        />
             <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          handler={addToCartHandler}
          title={"Veggy Cheese Burger"}
          delay={0.5}
        />
             <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={390}
          handler={addToCartHandler}
          title={"Cheese Burger With French Fries"}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
