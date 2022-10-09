import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Bill from "./Bill";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart,finalizarCompra } = useCartContext();
  console.log(cart);
  const [isPurchased,setIsPurchased] = React.useState(false);

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
          <button className="buttonCart" onClick={() => buy()}>Buy</button>
          <button className="buttonCart"  onClick={()=>clearCart()}>Clear all</button>
        </div>
      </div>

      {isPurchased && 
      <>
        <button className="closeModal" onClick={()=> {setIsPurchased(false);navigate("/");    clearCart();}}>X</button>
        <Bill cart={cart}/>
        
      </>
      }
    </>
  );
};

export default Cart;
