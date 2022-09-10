import React, { useEffect } from 'react'
import ItemCount from './ItemCount'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Card= ({id, title, img, info}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className='cardContainer' >
      <div className='individualCard' id={id} data-aos="fade-up"
     data-aos-duration="3000">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <ItemCount/>
        <button type="button" className="addToCart" ><Link to={`/item/${id}`}> More...</Link></button>
        
      </div>
    </div>
  )
}
export default Card