import React, { useState } from "react";
import SubmitReady from "./SubmitReady";
import styled from "styled-components";
import Center from "./Center";

const HorizontalDivider = styled.div`
   display: flex;
`;

const WaitingRoom = ({ G, moves }) => {
   const [playerName, setPlayerName] = useState(`enter your name`);
   const [canJoinGame, setCanJoinGame] = useState(false);

   return (
      <Center horizontal>
         <Center>
            <div>waiting for all players to join</div>
         </Center>
         <HorizontalDivider>
            <div>
               <h3>waiting for:</h3>
               <ul>
                  {G.playersReady.map((isReady, index) => {
                     return isReady ? null : <div>player {index}</div>;
                  })}
               </ul>
            </div>
            <Center horizontal>
               <div style={{ marginBottom: "5px" }}>Player Name:</div>
               <div>
                  <input
                     type="text"
                     name="name"
                     value={playerName}
                     onChange={(evt) => {
                        setCanJoinGame(true);
                        console.log(evt.target.value);
                        setPlayerName(evt.target.value);
                        console.log(playerName);
                     }}
                  />
                  <SubmitReady moves={moves} playerName={playerName} />
               </div>
            </Center>
         </HorizontalDivider>
      </Center>
   );
};

export default WaitingRoom;
