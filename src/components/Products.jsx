import React from 'react'
import ProductItem from './ProductItem'

function Products({products, toggleLike, liked, addToCart}) {
    // console.log(products)
  return (
    <div className='wrapper'>
      {
        products.map(item => (
            <ProductItem 
                key = {item.id}
                item = {item}
                toggleLike = {toggleLike}
                liked = {liked}
                addToCart = {addToCart}
            />
        ))
    }
    </div>
  )
}

export default Products
