import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {GiArmoredBoomerang} from "react-icons/gi";

const Orders = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Status</th>
              <th>Item Quantity</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i, key) => (
              <tr key={key}>
                <td> #aasdgad</td>
                <td>Processing</td>
                <td> 23</td>
                <td> {2134}</td>
                <td>Anmol</td>
                <td> COD</td>
                <td>
                  {" "}
                  <Link to={`/order/${"qwer"}`}>
                    <AiOutlineEye />
                  </Link>{" "}
                  <button >
                    <GiArmoredBoomerang/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
