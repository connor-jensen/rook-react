import React from 'react';

const PickTrump = ({moves}) => {
   return (
      <div>
         <div>pick trump suit:</div>
         <ul>
            <div className="blue" style={{width: "55px", padding: "4px"}}
               onClick={() => {
                  moves.pickTrumpSuit("blue");
               }}
            >
               Blue
            </div>
            <div className="green" style={{width: "55px", padding: "4px"}}
               onClick={() => {
                  moves.pickTrumpSuit("green");
               }}
            >
               Green
            </div>
            <div className="red" style={{width: "55px", padding: "4px"}}
               onClick={() => {
                  moves.pickTrumpSuit("red");
               }}
            >
               Red
            </div>
            <div className="yellow" style={{width: "55px", padding: "4px"}}
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