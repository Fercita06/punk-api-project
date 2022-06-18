import React, {useState, useEffect} from 'react'
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"

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
    

  return (
    <div className="App">
      <NavBar beers={beers} setBeers={setBeers} handleSearch= {handleSearch}/>
      <Main beers={beers} />

      
    </div>
  )
}

export default App