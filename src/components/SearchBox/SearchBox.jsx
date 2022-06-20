//import React, {useState} from 'react'
import "./SearchBox.scss";





const SearchBox = ({beers, setBeers,handleSearch}) => {
  //const [searchBox, setSearchBox] = useState("");

  /*const filteredBeers = async (e) => {
    const url = "https://api.punkapi.com/v2/beers?beer_name=" + e.target.value
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);

  };*/
  

    

  return (
    
    <form className="searchBox">
      <label htmlFor={"search"} className="searchBox__label"></label>
      <input className="SearchBox__input-box" placeholder="Search beers by name" type="text" name={"search"} onInput={handleSearch} />
    </form>
  
  )

  }
export default SearchBox