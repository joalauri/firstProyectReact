import React, { useEffect } from "react";
import ItemCount from "./ItemCount";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ detail }) => {

const [goToCart, setGoToCart] = useState(false)
const {addProduct} = useCartContext();

const onAdd = (quantity) =>{
  setGoToCart(true)
  addProduct(detail, quantity)
}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="individualCard" id={detail.id} data-aos="fade-up">
      <img src={detail.img} alt="" />
      <h2>{detail.title}</h2>
      <h4>{detail.info}</h4> 
      <h4>Amount per unit ${detail.price}</h4> 
      <h3>stock: {detail.stock > 0 ? detail.stock : "Sold out"}</h3>
      {
        goToCart
          ? <Link to={'/cart'}>finish the purchase</Link>
          : <ItemCount onAdd={onAdd} maxQuantity={detail.stock}/>
      }
    </div>
  );
};
export default ItemDetail;
