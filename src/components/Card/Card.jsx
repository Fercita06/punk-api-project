import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {
  const {image_url, name, tagline, id,description,abv} = beer;
  

  return (
    <article className="beer-card">
      <div className="beer-card__img"style={{backgroundImage: `url(${image_url})`}}>
        <h2 className="beer-card__beer-name">{name}</h2>
        <h3 className="beer-card__beer-tagline">{tagline}</h3>
      </div>
      <div className="beer-card__info">
        <p className="beer-card__info-description">{description}</p>
        <div className='info-container'>
          <div className='container__alcohol'>{abv}</div>
          <button className='container__button'>Read More</button>
        </div>
      </div>
    </article>
  )
}

export default Card