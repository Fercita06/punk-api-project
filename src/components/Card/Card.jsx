import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {
  const {image_url, name, tagline, id,description,abv} = beer;
  

  return (
    <article className="beer-card">
      <div className={id%2===0?"bg-color--yellow":"bg-color--red"}>
      
        <div className="beer-card__img"style={{backgroundImage: `url(${image_url})`}}>
         <h2 className="beer-card-name">{name}</h2>
         <h3 className="beer-card-tagline">{tagline}</h3>
        </div>
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