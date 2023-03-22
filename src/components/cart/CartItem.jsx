import React, {} from 'react'

function CartItem({cartProduct, removeFromCart, handlePlus, handleMinus}) {
    console.log(cartProduct.id)
  return (
    <div className="cart-product" >
      <img src={cartProduct.image} alt="" srcSet="" />
      <div className="cart-product-info">
        <h3 className='cart-price'>{cartProduct.price}</h3>
        <div className="quantity">
          <button 
            type='button' 
            className='plus'
            onClick={() => handlePlus(cartProduct.id)}
          >+</button>
          <h4 className='qty'>{cartProduct.qty}</h4>
          <button 
            type='button' 
            className='minus'
            disabled={cartProduct.qty < 2}
            onClick={() => handleMinus(cartProduct.id)}
          >-</button>
          <button type='button' className='remove'>
            <i className="fa-solid fa-trash"
              onClick={()=>removeFromCart(cartProduct.id)}
            ></i>
          </button>
        </div>
        <h2 className='total'>{(cartProduct.price * cartProduct.qty).toFixed(2)} $</h2>
      </div>     
    </div>
  )
}

export default CartItem
