import React from "react";
import styled from "styled-components";
import Center from "./Center";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: hsl(245deg, 100%, 60%);
   padding: 4px;
   border-radius: 3px;
   width: 65px;
   font-size: 0.95rem;
`;

const ActiveWrapper = styled.div`
   display: flex;
   flex-direction: column;
   color: hsl(245deg, 100%, 60%);
   background-color: hsl(210deg, 10%, 90%);
   padding: 4px;
   border-radius: 3px;
   width: 65px;
   font-size: 0.95rem;
`;

const PlayerDisplayCard = ({ playerName, points, active }) => {
   if (active) {
      return (
         <ActiveWrapper>
            <div>{playerName}</div>
            <div>{points}</div>
         </ActiveWrapper>
      );
   } else {
      return (
         <Wrapper>
            <div>{playerName}</div>
            <div>{points}</div>
         </Wrapper>
      );
   }
};

const PlayerPointsDisplay = ({ playerPoints, playerID, G, ctx }) => {
   return (
      <Center spaced>
         {playerPoints.map((points, index) => {
            const style =
               Number(playerID) === index
                  ? { paddingLeft: "30px", color: "blue" }
                  : { paddingLeft: "30px" };
            if (Number(ctx.currentPlayer) === index) {
               return (
                  <PlayerDisplayCard
                     playerName={G.playerNames[index]}
                     points={points}
                     active
                  />
               );
            } else
               return (
                  <PlayerDisplayCard
                     playerName={G.playerNames[index]}
                     points={points}
                  />
               );
         })}
      </Center>
   );
};

export default PlayerPointsDisplay;
