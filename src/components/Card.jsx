import React from 'react'
import ItemCount from './ItemCount'

const Card= ({id, title, img, info}) => {
  return (
    <div className='cardContainer'>
      <div className='individualCard' id={id}>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{info}</p>
        <ItemCount/>
      </div>
    </div>
  )
}

export default Card