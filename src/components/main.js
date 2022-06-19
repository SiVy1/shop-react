import React from 'react'
import data from './data.json'
import './style/style.css'

export default function Main({addCartCount, addCartItems, cartItems}) {
    const handleChange = event => {
        addCartItems(prev => [...prev,event.target.value]);
        addCartCount(prev => prev + 1)
        console.log('value is:', event.target.value);
      };
    const product = data.map(item => 
    <div className='product' key={item.id}>
        <div className='product-img-con'>
            <img src={item.img} alt='product-img' className='product-img'></img>
            <span className='product-size'>{item.size}</span>
        </div>
        <div className='product-info'>
            <span>{item.name}</span>
            <span className='product-price'>{item.price}zł</span>
            <button className='product-button' value={item.name} onClick={handleChange}>Dodaj do koszyka</button>
        </div>
    </div>
    )
  return (
    <div className='Main'>
        {product}
    </div>
  )
}
