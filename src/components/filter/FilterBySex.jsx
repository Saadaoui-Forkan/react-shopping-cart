import React from 'react'

function FilterBySex({setOption}) {
  return (
    <div className='filter-by-sex'>
      <h4 className='heading-title'>Gender</h4>
      <div className="gender">
        <div className="form-group">
            <input
                onChange={(e) => setOption(e.target.value)}
                value="all"
                type="radio"
                name="filter"
                id="all"
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setOption(e.target.value)}
              value="Men"
              type="radio"
              name="filter"
              id="male"
            />
            <label htmlFor="male">Male</label>
          </div>
        <div className="form-group">
          <input
              onChange={(e) => setOption(e.target.value)}
              value="Women"
              type="radio"
              name="filter"
              id="female"
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </div>
  )
}

export default FilterBySex