import { useState } from "react";

const ItemCount = () => {
  const [addCount, setAddCount] = useState(0);
  const restToAdd = () => {
    setAddCount(addCount - 1);
  };
  const addToAdd = () => {
    setAddCount(addCount + 1);
  };
  const alertButton = () =>{
    alert("agregado al carrito")
  }

  return (
  <div className="addGeneral">
    <div className="contadorContainer">
      <button type="button" onClick={restToAdd} >-</button>
      <h3 className="contador">{addCount}</h3>
      <button type="button" onClick={addToAdd} >+</button>    
    </div>
    <button type="button" className="addToCart" onClick={alertButton}> Add to cart</button>
    <button type="button" className="addToCart" onClick={alertButton}>+Info</button>
  </div>
    
  );
};

export default ItemCount;
