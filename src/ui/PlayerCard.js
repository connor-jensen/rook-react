import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
   width: 200px;
   height: 50px;
   background-color: lightblue;
   border-radius: 5px;
   padding-left: 10px;
`;

const PlayerCard = ({playerPoints, playerID, G}) => {
   return (
      <CardWrapper>
         <div>{G.playerNames[playerID]}</div>
         <div>Total score: {playerPoints[playerID]}</div>
      </CardWrapper>
   )
}

export default PlayerCard;