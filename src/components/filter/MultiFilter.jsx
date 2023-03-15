import React, {} from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import FilterByRate from './FilterByRate'
import FilterBySex from './FilterBySex'
import './filter.css'

function MultiFilter({multiFilter, categories}) {
  
  return (
    <div className={multiFilter}>
      <FilterByCategory categories = {categories}/>
      <FilterBySex/>
      <FilterByPrice/>
      <FilterByRate/>
      <button type='button' className='filter-btn'>Filter</button>
    </div>
  )
}

export default MultiFilter
