//import React, {useState} from 'react'





const SearchBox = ({beers, setBeers,handleSearch}) => {
  //const [searchBox, setSearchBox] = useState("");

  /*const filteredBeers = async (e) => {
    const url = "https://api.punkapi.com/v2/beers?beer_name=" + e.target.value
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);

  };*/
  

    

  return (
    
    <form className="search-box">
      <label htmlFor={"search"} className="search-box__label">search</label>
      <input type="text" name={"search"} onInput={handleSearch} className="search-box__input"/>
    </form>
  
  )

  }
export default SearchBox