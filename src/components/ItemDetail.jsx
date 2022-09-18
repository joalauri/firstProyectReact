import React, { useEffect } from "react";
import ItemCount from "./ItemCount";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ detail }) => {

const {addProduct} = useCartContext();
const [goToCart, setGoToCart] = useState(false)

const onAdd = (quantity) =>{
  setGoToCart(true)
  console.log(`compraste ${quantity}`)
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
      {
        goToCart
          ? <Link to={'/cart'}>Terminar Compra</Link>
          : <ItemCount onAdd={onAdd}/>
      }
    </div>
  );
};
export default ItemDetail;
