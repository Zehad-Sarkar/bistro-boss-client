import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="">
        <h3>Cart Items : {cart.length}</h3>
        <h3>Cart Items : {total}</h3>
        <button className="btn btn-sm">Pay</button>
      </div>
    </div>
  );
};

export default MyCart;
