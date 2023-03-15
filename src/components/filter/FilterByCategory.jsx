import React from 'react'

function FilterByCategory({categories}) {
  return (
    <div className='filter-by-category'>
      <h4 className='heading-title'>Categories</h4>
      <div className='categories'>
        {
          categories.map(category => (
            <label key={category}>
              <input type="checkbox" />
              {category}
            </label>
          ))
        }
      </div>
      
    </div>
  )
}

export default FilterByCategory
