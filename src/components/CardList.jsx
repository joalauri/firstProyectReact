import React from 'react'
import Card from './Card'


const CardList = ({Cards}) => { 
  return (
    <>
      
    {Cards.map((item)=>
        <Card key={item.id} id={item.id} title={item.title} img={item.img} info={item.info}/>
    )}

    </>

  )
}

export default CardList