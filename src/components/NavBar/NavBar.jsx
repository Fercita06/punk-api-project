import React from 'react'
import FiltersList from "../../containers/FiltersList/FiltersList"
import SearchBox from "../SearchBox/SearchBox"



const NavBar = ({beers, setBeers, handleSearch, filteredByAbv, filteredByAcidicLevel, filteredByClassicRange}) => {


  return (
    <header className="navBar">
      <SearchBox handleSearch = {handleSearch}/>
      <FiltersList filteredByAbv={filteredByAbv} filteredByClassicRange= {filteredByClassicRange} filteredByAcidicLevel={filteredByAcidicLevel}/>
      


    </header>
  )
}

export default NavBar