import React, { useState } from 'react';

const PickAlly = ({ moves }) => {
   const [number, setNumber] = useState(1);
   const [suit, setSuit] = useState("blue");

   return (
      <div>
         <div>Choose a teammate by calling a card:</div>
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
               <option>12</option>
               <option>11</option>
               <option>10</option>
               <option>9</option>
               <option>8</option>
               <option>7</option>
               <option>6</option>
               <option>5</option>
               <option>4</option>
               <option>3</option>
               <option>2</option>
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
         <div style={{padding:"5px"}}>or <button onClick={() => moves.pickAllyByCard("rook", 0)}>Call for the rook</button></div>
      </div>
   );
};

export default PickAlly;
