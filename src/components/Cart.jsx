import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <>
        <div className="cartContainer">
          <h5>Oh gosh! is empty! Come back and buy somthing.</h5>
          <Link to="/">¡Click Here!</Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cartContainer">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <h5>total: {totalPrice()}</h5>
        <button className="buttonCart"  onClick={()=>clearCart()}>Clear all</button>
      </div>
    </>
  );
};

export default Cart;
