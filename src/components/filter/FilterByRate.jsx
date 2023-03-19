import React from 'react'
import { BsFillStarFill } from "react-icons/bs";

function FilterByRate({rate, setRate}) {
  
  return (
    <div className='filter-by-rate'>
      <h4 className='heading-title'>Rate</h4>
      <div className="rates">
        {[...Array(5)].map((star, i) => {
          i +=1
          return (
              <label key={i}>
                <input 
                  className='rating-input' 
                  type="radio" 
                  name="rating" 
                  value={i}
                  onClick = {()=> setRate(i)}
                  // onChange = {(e) => setRate(e.target.value)}
                />
                <BsFillStarFill
                  color = {rate >= i ? "#ffc107" : "#e4e5e9"}
                  size={20}
                />
              </label>
          );
        })}
      </div>
    </div>
  )
}

export default FilterByRate
