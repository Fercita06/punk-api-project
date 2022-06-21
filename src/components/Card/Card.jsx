import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {
  const {image_url, name, tagline, id,description,abv} = beer;
  

  return (
    <article className="beer-card">
      <div className={id%2===0?"bg-color--yellow":"bg-color--red"}>
          <h2 className="beer-card__name">{name}</h2>
          <div className="beer-card__img"style={{backgroundImage: `url(${image_url})`}}/>
          <button className='beer-card__alcohol'>{abv}</button>
          <div className='beer-card__info'>
            <h3 className="beer-card-tagline">{tagline}</h3>
            <p className="info-description">{description}</p>
          </div>
         
      </div>
    </article>
  )
}

export default Card
