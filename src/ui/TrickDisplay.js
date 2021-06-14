import React from "react";
import Card from "./Card";

const TrickDisplay = ({
   names,
   trickState,
   turnOrder,
   offensiveTeam,
   defensiveTeam,
   playerID
}) => {

   const selfTeam = offensiveTeam.includes(playerID) ? "offense" : "defense"

   console.log(`self: ${selfTeam}`)
   return (
      <div>
         {turnOrder.map((playerNumber) => {

            const playerTeam = offensiveTeam.includes(playerNumber) ? "offense" : "defense"
            const highlight = playerTeam === selfTeam ? {color: "blue"} : {color: "black"}


            let card =  getCardByOwner(trickState.cards, Number(playerNumber));
            if (card === null) {
               return <div style={highlight}>{names[Number(playerNumber)]}:</div>;
            } else
               return (
                  <div style={{display: "flex"}}>
                     <div style={highlight}>{names[Number(playerNumber)]}</div>
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