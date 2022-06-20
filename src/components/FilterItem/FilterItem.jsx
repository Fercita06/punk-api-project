import React from 'react'

const FilterItem = (props) => {
  const {text,handleClick}= props;

  return (
    <div> 
      <input onClick={handleClick} type="checkbox" name="filterByAbv"/>
      <label htmlFor={"filterByAbv"} className="searchBox__label">{text}</label>
    </div>
  )
}

export default FilterItem