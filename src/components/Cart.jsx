import React from 'react'

function Cart({cartItems, setModal}) {
    console.log(cartItems)
  return (
    <div className='cart-modal'>
      {
        cartItems.map((cartItem,index) => (
            <div className="cart-product" key={index}>
                <img src={cartItem.image} alt="" srcSet="" />
                <div className="cart-product-info">
                    <h3 className='cart-price'>{cartItem.price}$</h3>
                    <div className="quantity">
                        <button type='button' className='plus'>+</button>
                        <h4 className='qty'>1</h4>
                        <button type='button' className='minus'>-</button>
                        <button type='button' className='remove'>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <h2 className='total'>tot</h2>
                </div>     
            </div>
        ))
      }
      <div className="cart-summary">
        <h2 className='cart-summary-title'>Total: {}$</h2>
        <button type='button' onClick={()=>setModal(false)}>CLOSE</button>
      </div>
    </div>
  )
}

export default Cart
