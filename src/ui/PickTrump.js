import React from 'react';

const PickTrump = ({moves}) => {
   return (
      <div>
         <div>pick trump suit:</div>
         <ul>
            <div className="blue card"
               onClick={() => {
                  moves.pickTrumpSuit("blue");
               }}
            >
               Blue
            </div>
            <div className="green card"
               onClick={() => {
                  moves.pickTrumpSuit("green");
               }}
            >
               Green
            </div>
            <div className="red card"
               onClick={() => {
                  moves.pickTrumpSuit("red");
               }}
            >
               Red
            </div>
            <div className="yellow card"
               onClick={() => {
                  moves.pickTrumpSuit("yellow");
               }}
            >
               Yellow
            </div>
         </ul>
      </div>
   );
}
 
export default PickTrump;