import React from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const increment = ({ item }) => {};
  const decrement = ({ item }) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Cheese  Burger With French Fries"}
          img={burger2}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Cheese Veg Burger"}
          img={burger3}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{20000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{20000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{2560}</p>
          </div>
          <Link to="/shiping">CheckOut</Link>
        </article>
      </main>
    </section>
  );
};
const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

export default Cart;
