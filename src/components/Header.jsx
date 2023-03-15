import React, { useState } from 'react'

function Header({handleShowHide, liked}) {
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
            <div className="cart">
                My Cart
                <p className='my-cart'>5</p>
            </div>
            <div className="favorites">
                My Favorites
                <p className={liked.length !== 0 && "favorites-products"}>
                    {liked.length !== 0 && liked.length}
                </p>
            </div>
        </div>
        <div className="burger" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Header
