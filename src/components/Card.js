import React from 'react';
import '../css/Card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?200x200`} alt='Robot' />
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
}

export default Card;