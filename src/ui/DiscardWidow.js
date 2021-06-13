import React from "react";
import Card from "./Card";

const DiscardWidow = ({ cards, moves }) => {
   return (
      <div>
         <div>Yow won the bid. Click two cards to discard them</div>
         <ul>
            {cards.map((card, index) => {
               return (
                  <Card
                     card={card}
                     clickHandler={() => moves.discardWidowCard(index)}
                  />
               );
               // return (
               //    <li
               //       onClick={() => {
               //          moves.discardWidowCard(index);
               //       }}
               //    >
               //       {cardString}
               //    </li>
               // );
            })}
         </ul>
      </div>
   );
};

export default DiscardWidow;
