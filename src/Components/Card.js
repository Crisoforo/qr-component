import React from 'react';
import QR from '../images/image-qr-code.png';
import './Card.css';

function Card({title, body}) {
  return (
    <div className='container col-xxl-12'>
    <div className= 'card-container'>
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
    </div>
    </div>
  )
}

export default Card
