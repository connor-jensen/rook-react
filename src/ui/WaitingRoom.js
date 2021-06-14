import React, { useState } from "react";
import SubmitReady from "./SubmitReady";

const WaitingRoom = ({ G, moves }) => {
   const [playerName, setPlayerName] = useState(`enter your name`);
   const [canJoinGame, setCanJoinGame] = useState(false);

   return (
      <div>
         <div>waiting for all players to join</div>
         <h3>waiting for:</h3>
         <ul>
            {G.playersReady.map((isReady, index) => {
               return isReady ? null : <div>player {index}</div>;
            })}
         </ul>
         <div>player name:</div>
         <input
            type="text"
            name="name"
            value={playerName}
            onChange={(evt) => {
               setCanJoinGame(true);
               console.log(evt.target.value)
               setPlayerName(evt.target.value);
               console.log(playerName);
            }}
         />
         <SubmitReady moves={moves} playerName={playerName} />
      </div>
   );
};

export default WaitingRoom;
