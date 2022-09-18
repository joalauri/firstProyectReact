import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import fallingMan from "./assets/fallingMan.jpg";
import neonMan from "./assets/neonMan.jpg";
import womanBLack from "./assets/womanBlack.jpg";
import candle from "./assets/candleBlack.jpg";
import girlBlack from "./assets/girlBlack.jpg";
import fishBlack from "./assets/fishBlack.jpg";
import cisneNegro from "./assets/cisneNegro.jpg";
import coffee from "./assets/coffeeBlack.jpg";
import chessBlack from "./assets/chessBlack.jpg";
import cristalesRotos from "./assets/cristalesRotos.jpg";
import rose from "./assets/roseBlack.jpg";
import timeSpace from "./assets/timeSpaceBlack.jpg";
import woman2 from "./assets/woman2Black.jpg";
import manBlack from "./assets/manBlack.jpg";
import lightBlack from "./assets/lightBlack.jpg";
import { useParams } from "react-router-dom";

const CardListContainer = () => {
  const [item, setItem] = useState([]);
  const { oldNewlist } = useParams();
  const infoLorem = `From my mother's sleep I fell into the State,
And I hunched in its belly till my wet fur froze.
Six miles from earth, loosed from its dream of life,
I woke to black flak and the nightmare fighters.
When I died they washed me out of the turret with a hose.`;
  useEffect(() => {
    let dataSimulation = [
      {
        img: chessBlack,
        id: 1,
        title: "Chess board",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
      {
        img: girlBlack,
        id: 2,
        title: "Girl",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
      {
        img: womanBLack,
        id: 3,
        title: "Woman",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: candle,
        id: 4,
        title: "Middle Candle",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
      {
        img: neonMan,
        id: 5,
        title: "Movile",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: fishBlack,
        id: 6,
        title: "Colorfull Fish",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: cisneNegro,
        id: 7,
        title: "Black Swan",
        info: infoLorem,
        category: "top",
        price: 5000
      },
      {
        img: coffee,
        id: 8,
        title: "Coffee",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
      {
        img: fallingMan,
        id: 9,
        title: "Fallin into",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: cristalesRotos,
        id: 10,
        title: "Broken Glass",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: rose,
        id: 11,
        title: "With Rose",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
      {
        img: timeSpace,
        id: 12,
        title: "Little Lights",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: woman2,
        id: 13,
        title: "She",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: manBlack,
        id: 14,
        title: "He",
        info: infoLorem,
        category: "normal",
        price: 2175
      },
      {
        img: lightBlack,
        id: 15,
        title: "Light in dark",
        info: infoLorem,
        category: "top",
        price: 5000,
      },
    ];
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataSimulation);
      }, 500);
    }).then((data) => {
      if (oldNewlist) {
        setItem(data.filter((picture) => picture.category === oldNewlist));
      } else {
        setItem(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
