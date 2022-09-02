import React, { useEffect, useState } from "react";
import fallingMan from "./assets/fallingMan.jpg";
import neonMan from "./assets/neonMan.jpg";
import CardList from "./CardList";

const CardListContainer = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
      let dataSimulation = 
       [{ img: fallingMan, id: 1, title: "Neon Man", info:"lorem1" },
         { img: neonMan, id: 2, title: "Falling man", info:"lorem2" }]
      new Promise ((resolve)=>{
        setTimeout(() => {
          resolve(dataSimulation)
        }, 2000)
      }).then((data)=>{
        setItem(data)
      })
    }, []);
  return (
    <div className="cardListContainer">
        {item.length ? 
        <CardList Cards={item}/>:
        <h2>Cargando...</h2>}
    </div> 
  )
}

export default CardListContainer