import React from 'react';

const PickTrump = ({moves}) => {
   return (
      <div>
         <div>pick trump suit:</div>
         <ul>
            <li className="blue" style={{width: "55px", paddingLeft: "5px"}}
               onClick={() => {
                  moves.pickTrumpSuit("blue");
               }}
            >
               Blue
            </li>
            <li className="green" style={{width: "55px", paddingLeft: "5px"}}
               onClick={() => {
                  moves.pickTrumpSuit("green");
               }}
            >
               Green
            </li>
            <li className="red" style={{width: "55px", paddingLeft: "5px"}}
               onClick={() => {
                  moves.pickTrumpSuit("red");
               }}
            >
               Red
            </li>
            <li className="yellow" style={{width: "55px", paddingLeft: "5px"}}
               onClick={() => {
                  moves.pickTrumpSuit("yellow");
               }}
            >
               Yellow
            </li>
         </ul>
      </div>
   );
}
 
export default PickTrump;