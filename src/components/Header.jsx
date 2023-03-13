import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <i className="fa-solid fa-filter"></i>
        </div> 
        <div className="header-right">
            <div className="cart">
                My Cart
                <p>5</p>
            </div>
            <div className="favorites">
                My Favorites
                <p>5</p>
            </div>
        </div>
    </div>
  )
}

export default Header
