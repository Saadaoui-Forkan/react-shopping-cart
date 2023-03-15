import React from 'react'

function FilterByRate() {
  return (
    <div className='filter-by-rate'>
      <h4 className='heading-title'>Rate</h4>
      <div className="rates">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
              <span key={index} className="rate">
                  <i className="fa-solid fa-star"></i>
              </span>
          );
        })}
      </div>
    </div>
  )
}

export default FilterByRate
