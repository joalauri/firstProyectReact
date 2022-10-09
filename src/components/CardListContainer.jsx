import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const CardListContainer = () => {
  const [item, setItem] = useState([]);
  const { oldNewlist } = useParams();

  useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Items-Art-Cards')
      if (oldNewlist) {
        const queryFilter = query(queryCollection, where('category','==',oldNewlist))
        getDocs(queryFilter)
        .then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))))
      } else {
        getDocs(queryCollection)
      .then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))))
      }
  }, [oldNewlist]);

  return (
    <>
      <div className="App">
        <div className="mainContainer">
          <div className="cardListContainer ">
            {item.length ? <CardList Cards={item} /> : <h2>Cargando...</h2>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListContainer;
