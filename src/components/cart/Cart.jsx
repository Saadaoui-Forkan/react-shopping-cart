import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'

function Cart({cartItems, setModal, removeFromCart}) {
  
  const cartProducts = cartItems.map(item => ({...item, qty:1}))
  const [qtyArray, setQtyArray] = useState(cartProducts)

  // add quantity
  const handlePlus = (index) => {
    setQtyArray(prev => prev.map((item,id) => id+1 === index ? { ...item, qty: item.qty + 1 } : item))
  }

  // minus quantity
  const handleMinus = (index) => {
    setQtyArray(prev => prev.map((item,id) => id+1 === index ? { ...item, qty: item.qty - 1 } : item))
  }
  

  // calculate total price
  let totalPrice = qtyArray.reduce((acc, item) => (acc + item.qty * item.price), 0)

  useEffect(() => {
    const ids = cartItems.map((item) => {
      return item.id;
    });
    const filteredCartItems = qtyArray.filter((item) => ids.indexOf(item.id) !== -1);
    setQtyArray(filteredCartItems);
  }, [cartItems, qtyArray]);
  
  return (
    <div className='cart-modal'>
      {
        qtyArray.map((cartProduct,index) => (
          <CartItem
            key = {index}
            cartProduct = {cartProduct}
            removeFromCart = {removeFromCart}
            handlePlus = {handlePlus}
            handleMinus = {handleMinus}
          />
        ))
      }
      <div className="cart-summary">
        <h2 className='cart-summary-title'>Total:          {totalPrice.toFixed(3)} $</h2>
        <button type='button' onClick={()=>setModal(false)}>CLOSE</button>
      </div>  
    </div>
  )
}

export default Cart
