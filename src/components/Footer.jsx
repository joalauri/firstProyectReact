import React from 'react'
import CartWidget from './CartWidget'
const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='cardListContainer'>
            <CartWidget/>
        </div>
        <div className='footer2Div'>
        </div>
    </div>
  )
}

export default Footer