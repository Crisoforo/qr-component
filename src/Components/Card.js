import React from 'react';
import QR from '../images/image-qr-code.jpeg';
import './Card.css';

function Card({title, body}) {
  return (
    <div className='container col-xxl-12'>
    <div className= 'card-container'>
        <a href='https://open.spotify.com/intl-es/track/4cOdK2wGLETKBW3PvgPWqT?si=17d5b7b591ab4b84' target="_blank" >
      <div className='image-container'>
        <img src={QR} alt="My QR" />
      </div>
      <div className='card-content'>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
      </div>
      </a>
    </div>
    </div>
  )
}

export default Card
