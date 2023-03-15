import React from 'react'

function FilterBySex() {
  return (
    <div className='filter-by-sex'>
      <h4 className='heading-title'>Gender</h4>
      <div className="gender">
        <label>
          <input
            type="radio"
            value="Male"
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
          />
          Female
        </label>
      </div>
    </div>
  )
}

export default FilterBySex
