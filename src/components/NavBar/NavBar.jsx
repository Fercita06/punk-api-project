import React from 'react'
import FiltersList from "../../containers/FiltersList/FiltersList"
import SearchBox from "../SearchBox/SearchBox"



const NavBar = ({beers, setBeers, handleSearch}) => {


  return (
    <header>
      <SearchBox handleSearch = {handleSearch}/>
      <FiltersList />
      


    </header>
  )
}

export default NavBar