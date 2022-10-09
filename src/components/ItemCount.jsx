import { useState } from "react";


const ItemCount = ({onAdd,maxQuantity}) => {
  const [addCount, setAddCount] = useState(0);
  const restToAdd = () => {
    addCount>=1? setAddCount(addCount - 1): setAddCount(addCount - 0)
  };
  const addToAdd = () => {
    addCount < maxQuantity && setAddCount(addCount + 1);
  };
  
  return (
  <div className="addGeneral">
    <div className="contadorContainer">
      <button type="button" onClick={restToAdd} >-</button>
      <h3 className="contador">{addCount}</h3>
      <button type="button" onClick={addToAdd} >+</button>    
    </div >
    <div className="contadorContainer">
    <button type="button" disabled={addCount<=0} onClick={ () => onAdd(addCount) }>¡Comprar!</button>
    </div>
    
  </div>
    
  );
};

export default ItemCount;
