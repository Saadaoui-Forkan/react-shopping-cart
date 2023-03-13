import React from 'react'
import ProductItem from './ProductItem'

function Products({products}) {
    // console.log(products)
  return (
    <div className='wrapper'>
      {
        products.map(item => (
            <ProductItem 
                key = {item.id}
                item = {item}
            />
        ))
    }
    </div>
  )
}

export default Products
