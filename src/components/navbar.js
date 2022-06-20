import React from 'react'
import './style/style.css'
import { useState } from 'react'
import data from './data.json'

export default function Navbar(props) {
  console.log(props)
  const [isVisible, setIsVisible] = useState(false)
  function visibleToggle(){
    setIsVisible(prev => !prev)
  }
  console.log(props.cartItems)
  const cartProducts = props.cartItems.map(item =>{
    console.log(item)
    return(
    <span className='cart-item'>{item}</span>
    )
  })
  return (
    <nav className='navbar'>
      <input className='search-bar'></input>
      <div className='nav-cart' onMouseEnter={visibleToggle} onMouseLeave={visibleToggle}>
        <img className='cart-icon' src='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg' alt='cart-icon'></img>
        <span className='cart-items'>{props.itemCount}</span>
        <div className='cart-con' style={{visibility: isVisible ? 'visible' : 'hidden'}}>
          <span className='cart-title'>Twój koszyk zawiera:</span>
            {cartProducts}
        </div>
      </div>
    </nav>

  )
}
