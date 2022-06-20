import React from 'react'
import FilterItem from '../../components/FilterItem/FilterItem'

const FiltersList = ({filteredByAbv, filteredByAcidicLevel, filteredByClassicRange}) => {
  return (
    <div className="filterBoxes">
     <FilterItem text="High ABV (>6.0%)" handleClick={filteredByAbv}/>
     <FilterItem text="Classic Range" handleClick={filteredByAcidicLevel}/>
     <FilterItem text="Acidic (Ph<4)" handleClick={filteredByClassicRange}/>
    
    </div>
  )
}

export default FiltersList