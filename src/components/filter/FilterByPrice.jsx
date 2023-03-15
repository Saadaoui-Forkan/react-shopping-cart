import React from 'react'

function FilterByPrice() {
  return (
    <div className='filter-by-price'>

      <h4 className='heading-title'>Price</h4>
      <input 
        type="range"
        step="50"
        name="volume"
        min="0" 
        max="1000"
      />

    </div>
  )
}

export default FilterByPrice
