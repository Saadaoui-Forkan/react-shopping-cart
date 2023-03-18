import React from 'react'

function FilterByPrice({price, setPrice}) {
  return (
    <div className='filter-by-price'>

      <h4 className='heading-title'>Price</h4>
      <input 
        type="range"
        step="50"
        name="price"
        min="0" 
        max="1000"
        value = {price}
        onChange = {(e)=>setPrice(e.target.value)}
      />

    </div>
  )
}

export default FilterByPrice
