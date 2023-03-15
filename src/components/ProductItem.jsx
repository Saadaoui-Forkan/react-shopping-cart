/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Rating from './Rating'

function ProductItem({item, toggleLike, liked, addToCart}) {
  
  return (
    <div className='box'>
        {
            <div className="single-box">
                <div className="img"><img alt="Round_neck" src={item.image}/></div>
                <div 
                  className = {liked.includes(item.id) ? "liked isLiked" : "liked"}
                  onClick = {()=>toggleLike(item.id)}
                >
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>{item.title}</h3>
                <div className="price">
                    <p>${item.price}</p>
                </div>
                <Rating rating = {item.rating.rate}/>
                <button 
                  type='button'
                  onClick = {addToCart}
                >
                  Add To Cart
                </button>
            </div>
        }
      
    </div>
  )
}

export default ProductItem
