import { useState } from "react";



const ItemCount = () => {
  const [addCount, setAddCount] = useState(0);
  const restToAdd = () => {
    addCount>=1? setAddCount(addCount - 1): setAddCount(addCount - 0)
  };
  const addToAdd = () => {
    setAddCount(addCount + 1);
  };
  
  return (
  <div className="addGeneral">
    <div className="contadorContainer">
      <button type="button" onClick={restToAdd} >-</button>
      <h3 className="contador">{addCount}</h3>
      <button type="button" onClick={addToAdd} >+</button>    
    </div >
    <div className="contadorContainer">
    <button type="button">¡Comprar!</button> 
    </div>
    
  </div>
    
  );
};

export default ItemCount;
