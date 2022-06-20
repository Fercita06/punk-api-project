import React, {useState, useEffect} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState([]);
  const[url, setUrl]=useState("https://api.punkapi.com/v2/beers")

  useEffect(() => {
    getBeers()
  

  }, [url])

  const getBeers = async () => {
    
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);

  };

  const handleSearch = (event) => {
  
    const searchTerm = event.target.value;
    if(searchTerm){
      setUrl(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`) 
    }
    
}
    
  const filteredByAbv = (event) => {
    //const filterAbv = event.target.checked;
    if (event.target.checked === true) {
      setUrl(`https://api.punkapi.com/v2/beers?abv_gt=6`)
    }else if (event.target.checked === false) {
      setUrl ("https://api.punkapi.com/v2/beers")
    }
  }

  const filteredByClassicRange = (event) => {
    //const filterClassicBeer = event.target.checked;
    if (event.target.checked === true) {
      setUrl(`https://api.punkapi.com/v2/beers?brewed_before=01-2010`)
    }else if (event.target.checked === false) {
      setUrl ("https://api.punkapi.com/v2/beers")
    }
  }

  const filteredByAcidicLevel = (event) => {
   // const filterAcidicLevel = event.target.checked;
   // console.log(filterAcidicLevel);
   // console.log("filterAcidicLevel");
    if (event.target.checked === true) {
      setUrl(`https://api.punkapi.com/v2/beers?ibu_lt=4`)
    }else if (event.target.checked === false) {
      setUrl ("https://api.punkapi.com/v2/beers")
    }
  }


  

  return (
    <div className="App">
       
      <NavBar beers={beers} setBeers={setBeers} handleSearch= {handleSearch} filteredByAbv={filteredByAbv} filteredByClassicRange= {filteredByClassicRange} filteredByAcidicLevel={filteredByAcidicLevel} />
      <Main beers={beers} />

      
    </div>
  )
}

export default App