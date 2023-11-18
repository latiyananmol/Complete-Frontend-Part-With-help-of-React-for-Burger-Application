import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"D-167 Mahendra Enclave"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Anmol"}
          </p>
          <p>
            <b>Phone</b>
            {"232232123"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-09-98"}
          </p>
          <p>
            <b>Dileverd At</b>
            {"23-09-99"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Refrence </b>
            {"8398399339"}
          </p>
          <p>
            <b>Paid At</b>
            {"22-02-98"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹ {"10000"}
          </p>
          <p>
            <b>Shipping Charges</b>₹ {"200"}
          </p>
          <p>
            <b>Tax Charges</b>₹ {"232"}
          </p>
          <p>
            <b>Total Amount</b>₹ {"23200"}
          </p>
        </div>
        <article>
          <h1>Ordered Item</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4> Burger With French Fries</h4>
            <div>
              <span>{12}</span> x <span>{1802}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: "800",
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: "800",
              }}
            >
              ₹ {"4302"}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
