import React from "react";

const PlayerPointsDisplay = ({ playerPoints, playerID, G }) => {
   return (
      <div style={{ display: "flex" }}>
         {playerPoints.map((points, index) => {
            const style = Number(playerID) === index ? {paddingLeft:"30px", color: "blue"} : {paddingLeft:"30px"} 
            return (
                  <div  style={style}>{G.playerNames[index]}: {points}</div>
            );
         })}
      </div>
   );
};

export default PlayerPointsDisplay;
