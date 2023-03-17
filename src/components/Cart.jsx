import React, { useState } from 'react'

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const price = parseInt(cartItems[i].price);
    const qty = cartItems[i].qty;
    total += price * qty;
  }
  return total;
}

function Cart({ cartItems, setModal, removeFromCart }) {
  const [qtyArray, setQtyArray] = useState(
    cartItems.map((cartItem) => ({ ...cartItem, qty: 1 }))
  )
  const handlePlus = (index) => {
    setQtyArray((prevState) =>
      prevState.map((item, idx) =>
        idx === index ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const handleMinus = (index) => {
    setQtyArray((prevState) =>
      prevState.map((item, idx) =>
        idx === index ? { ...item, qty: item.qty - 1 } : item
      )
    )
  }
  
  return (
    <div className='cart-modal'>
      {cartItems.length === 0 ? (
        <h1 className='empty-cart'>Your Cart Is Empty</h1>
      ) : (
        cartItems.map((cartItem, index) => {
          const qtyIndex = qtyArray.findIndex(
            (item) => item.id === cartItem.id
          )
          const qty = qtyArray[qtyIndex].qty
          return (
            <div className='cart-product' key={index}>
              <img src={cartItem.image} alt='' />
              <div className='cart-product-info'>
                <h3 className='cart-price'>{cartItem.price}$</h3>
                <div className='quantity'>
                  <button
                    type='button'
                    className='plus'
                    onClick={() => handlePlus(qtyIndex)}
                  >
                    +
                  </button>
                  <h4 className='qty'>{qty}</h4>
                  <button
                    type='button'
                    className='minus'
                    disabled={qty <= 1}
                    onClick={() => handleMinus(qtyIndex)}
                  >
                    -
                  </button>
                  <button type='button' className='remove'>
                    <i
                      className='fa-solid fa-trash'
                      onClick={() => removeFromCart(cartItem.id)}
                    ></i>
                  </button>
                </div>
                <h2 className='total'>{cartItem.price * qty}</h2>
              </div>
            </div>
          )
        })
      )}
      <div className='cart-summary'>
      <h2 className='cart-summary-title'>Total: {calculateTotal(qtyArray)}$</h2>
<button type='button' onClick={()=>setModal(false)}>CLOSE</button>
</div>
</div>
)
}
export default Cart
