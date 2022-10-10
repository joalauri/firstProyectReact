import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Bill from "./Bill";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart,finalizarCompra } = useCartContext();
  console.log(cart);
  const [isPurchased,setIsPurchased] = React.useState(false);
  const orderFinish ={
    buyer:{
      name:'Jhone Doe',
      phone: 55400200,
      mail: 'jhonedoe@yahoo.com'
    },
    items:cart.map(product=> ({id: product.id, title:product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),

  }
const sendOrder = () =>{
const db = getFirestore();
const ordersCollection = collection(db, 'orders');
addDoc(ordersCollection, orderFinish)
.then(({ id })=>console.log('su compra se registró con el codigo: ' + id))
}

  const buy = () =>{
    finalizarCompra();
    setIsPurchased(true);
  }

  if (cart.length === 0 && !isPurchased) {
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
          <CartItem key={product.id} product={product}/>
        ))}
        <h5>total: {totalPrice()}</h5>
        <div style={{display:"flex",gap:"15px"}}>
          <button className="buttonCart" onClick={() => {buy(); sendOrder()} }>Buy</button>
          <button className="buttonCart"  onClick={()=>clearCart()}>Clear all</button>
        </div>
      </div>

      {isPurchased && 
      <>
        <button className="closeModal" onClick={()=> {setIsPurchased(false);navigate("/"); clearCart();}}>X</button>
        <Bill cart={cart}/>
        
      </>
      }
    </>
  );
};

export default Cart;
