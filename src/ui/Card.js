import React from 'react';

const Card = ({card, clickHandler}) => {

   return (
      <div className={"card " + card.suit} onClick={clickHandler}>{card.number} of {card.suit} {card.points > 0 ? `[${card.points}]` : null}</div>
   );
}
 
export default Card;