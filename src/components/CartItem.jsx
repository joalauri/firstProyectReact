import React from "react";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="cartItemContainer">
      <img src={product.img} alt="" />
      <div className="cartItem">
        <h4>Title: {product.title}</h4>
        <h5>Units: {product.quantity}</h5>
        <h5>Price per unit: ${product.price}</h5>
        <h5>Total: {product.quantity * product.price} </h5>
        <button className="buttonCart" onClick={() => removeProduct(product.id)}>Remove product</button>
      </div>
    </div>
  );
};

export default CartItem;
