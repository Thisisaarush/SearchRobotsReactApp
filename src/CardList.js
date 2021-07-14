import React from 'react';
import Card from './Card';
import './css/CardList.css';

const CardList = ({ robots }) => {
  return (
    <div className='card-list-container'>
      {
        robots.map((user, i) => {
          return (
            <div>
              <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
            </div>
          );
        })
      }
    </div>
    
  );
}

export default CardList;