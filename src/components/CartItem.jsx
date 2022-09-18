import React from "react";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="cartItemContainer">
      <img src={product.img} alt="" />
      <div className="cartItem">
        <h4>{product.title}</h4>
        <h5>{product.quantity}</h5>
        <h5>{product.price}</h5>
        <h5> {product.quantity * product.price} </h5>
        <button onClick={() => removeProduct(product.id)}>Kick product</button>
      </div>
    </div>
  );
};

export default CartItem;
