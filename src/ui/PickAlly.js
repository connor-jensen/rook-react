import React, { useState } from 'react';

const PickAlly = ({ moves }) => {
   const [number, setNumber] = useState(1);
   const [suit, setSuit] = useState("blue");

   return (
      <div>
         <div>Choose a teammate by picking a card:</div>
         <div>
            the
            <select
               onChange={(e) => {
                  setNumber(Number(e.target.value));
               }}
            >
               <option>1</option>
               <option>14</option>
               <option>13</option>
            </select>
            of
            <select
               onChange={(e) => {
                  setSuit(e.target.value);
               }}
            >
               <option>blue</option>
               <option>green</option>
               <option>red</option>
               <option>yellow</option>
            </select>
            <button onClick={() => moves.pickAllyByCard(suit, number)}>Submit</button>
         </div>
      </div>
   );
};

export default PickAlly;
