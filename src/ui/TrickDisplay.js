import React from "react";
import Card from "./Card";

const TrickDisplay = ({
   trickState,
   turnOrder,
}) => {
   return (
      <div>
         {turnOrder.map((playerNumber) => {
            let card =  getCardByOwner(trickState.cards, Number(playerNumber));
            if (card === null) {
               return <div>player {playerNumber}:</div>;
            } else
               return (
                  <div style={{display: "flex"}}>
                     <div>player {playerNumber}</div>
                     <Card card={card}/>
                  </div>
               );
         })}
         <div>---------------</div>
         <div>point total: {trickState.pointTotal}</div>
         <div>leading card: { trickState.winningCard ? (<Card card={trickState.winningCard}/>) : null }</div>
      </div>
   );
};

export default TrickDisplay;

function getCardByOwner(cards, ownerIndex) {
   for (let i = 0; i < 5; i++) {
      if (cards[i] === undefined) return null
      if (cards[i].owner === ownerIndex) {
         return cards[i]
      }
   }
   return null
}