import React from 'react'
import Card from '../../components/Card/Card'
import "./CardList.scss"

const CardList = (props) => {
  const {beers} = props;


  const createCards = beers.map((beer) => {
  return <Card key={beer.id} beer={beer} />
}

)
  

  return (
    <div className="card-container">
      {createCards}

    </div>
  )
}

export default CardList