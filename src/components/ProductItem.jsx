/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Rating from './Rating'

function ProductItem({item}) {
    console.log(item)
  return (
    <div className='box'>
        {
            <div class="single-box">
                <div class="img"><img alt="Round_neck" src={item.image}/></div>
                <div className='liked'><i className="fa-solid fa-heart"></i></div>
                <h3>{item.title}</h3>
                <div class="price">
                    <p>${item.price}</p>
                </div>
                <Rating rating = {item.rating.rate}/>
                <button type='button'>Add to Cart</button>
            </div>
        }
      
    </div>
  )
}

export default ProductItem
