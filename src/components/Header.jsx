import React, { useState } from 'react'

function Header({handleShowHide, liked, cartItems, setModal}) {
    const [rightNavbar, setRightNavbar] = useState('header-right')
    const toggleNavbar = () => {
        rightNavbar === "header-right" 
        ? setRightNavbar('header-right active-navbar') 
        : setRightNavbar('header-right')
    }

  return (
    <div className='header'>
        <div className="header-left">
            <i 
                className="fa-solid fa-filter"
                onClick = {handleShowHide}
            ></i>
        </div> 
        <div className={rightNavbar}>
            <div className="search">
                <input 
                    type="search" 
                    name="" 
                    placeholder='Search a product ...' 
                />
            </div>
            <div className="cart" onClick={()=>setModal(true)}>
                My Cart
                {
                    cartItems.length > 0 && <p className="my-cart">
                        {cartItems.length}
                    </p>
                }
            </div>
            <div className="favorites">
                My Favorites
                { 
                    liked.length !== 0 && <p className="favorites-products">
                        {liked.length}
                    </p>
                }
            </div>
        </div>
        <div className="burger" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Header
