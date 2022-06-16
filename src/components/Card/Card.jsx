import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const {url, name, tagline, id} = props;
  

  return (
    <div className="beer-card" key={id}>
      <img className="beer-card__beer-image"src={url} alt="" />
      <h1 className="beer-card__beer-name">{name}</h1>
      <p className="beer-card__beer-info">{tagline}</p>

    </div>
  )
}

export default Card