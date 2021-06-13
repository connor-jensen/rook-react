import React from "react";
import Card from "./Card";

const PlayTrick = ({ cards, moves, trickState }) => {
   return (
      <div>
         <div>click a card to play it</div>
         <ul>
            {cards.map((card, index) => {
               const cardString = `${card.number} of ${card.suit}`;
               return (
                  <Card card={card} clickHandler={() => moves.playCard(index)}/>
               );
            })}
         </ul>
      </div>
   );
};

export default PlayTrick;
