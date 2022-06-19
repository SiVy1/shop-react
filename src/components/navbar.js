import React from 'react'
import './style/style.css'
import { useState } from 'react'
export default function Navbar(props) {
  console.log(props)
  return (
    <nav className='navbar'>
      <input className='search-bar'></input>
      <div className='nav-cart'>
        <img className='cart-icon' src='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg' alt='cart-icon'></img>
        <span className='cart-items'>{props.itemCount}</span>
      </div>
    </nav>

  )
}
