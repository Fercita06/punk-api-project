import React from 'react'
import CardList from '../../containers/CardList/CardList'


const Main = (props) => {
  const {beers} = props;

  return (
    <div>
      <CardList beers={beers} />
      
    </div>
  )
}

export default Main