import React from 'react'
import data from './data.json'
import './style/style.css'

export default function Main({addCartCount, addCartItems}) {
    function addCount(){
        addCartCount(prev => prev + 1)
    }

    function addItem(){
        addCartItems(prevItems => prevItems + "siema")
    }
    const product = data.map(item => 
    <div className='product' key={item.id}>
        <div className='product-img-con'>
            <img src={item.img} alt='product-img' className='product-img'></img>
            <span className='product-size'>{item.size}</span>
        </div>
        <div className='product-info'>
            <span>{item.name}</span>
            <span className='product-price'>{item.price}</span>
            <button className='product-button' onClick={addCount} onClick={addItem}>Dodaj do koszyka</button>
        </div>
    </div>
    )
  return (
    <div className='Main'>
        {product}
    </div>
  )
}
