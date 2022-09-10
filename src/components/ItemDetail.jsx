import React, { useEffect } from "react";
import ItemCount from "./ItemCount";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemDetail = ({ detail }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="individualCard" id={detail.id} data-aos="fade-up">
      <img src={detail.img} alt="" />
      <h2>{detail.title}</h2>
      <ItemCount />
      <h4>{detail.info}</h4>
    </div>
  );
};
export default ItemDetail;
