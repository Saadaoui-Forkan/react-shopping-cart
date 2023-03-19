import React, {} from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import FilterByRate from './FilterByRate'
import FilterBySex from './FilterBySex'
import './filter.css'

function MultiFilter({multiFilter, 
categories, handleCheck, setOption, price, setPrice, rate, setRate}) {
  
  return (
    <div className={multiFilter}>
      <FilterByCategory 
        categories = {categories}
        handleCheck = {handleCheck}
      />
      <FilterBySex
        setOption = {setOption}
      />
      <FilterByPrice
        price = {price}
        setPrice = {setPrice}
      />
      <FilterByRate
        rate = {rate}
        setRate = {setRate}
      />
      <button type='button' className='filter-btn'>Filter</button>
    </div>
  )
}

export default MultiFilter
