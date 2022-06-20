import React from 'react'
import FiltersList from "../../containers/FiltersList/FiltersList"
import SearchBox from "../SearchBox/SearchBox"
import "./NavBar.scss"




const NavBar = ({beers, setBeers, handleSearch, filteredByAbv, filteredByAcidicLevel, filteredByClassicRange}) => {


  return (
    <header className="navBar">
      <h1 className='page-title'>BREWDOG BEERS</h1>
      <div className='navBar__filters'>
        <SearchBox handleSearch = {handleSearch}/>
        <FiltersList filteredByAbv={filteredByAbv} filteredByClassicRange= {filteredByClassicRange} filteredByAcidicLevel={filteredByAcidicLevel}/>
      </div>
    </header>
  )
}

export default NavBar