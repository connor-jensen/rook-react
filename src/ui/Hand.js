import React from "react";
import Card from "./Card";

const Hand = ({ cards, playerIndex }) => {
   return (
      <div>
         <div>Your hand:</div>
         <ul>
            {cards.map((card, index) => {
               return <Card card={card}/>;
            })}
         </ul>
      </div>
   );
};

export default Hand;
