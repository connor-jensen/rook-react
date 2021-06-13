import React from "react";

const PlayerPointsDisplay = ({ playerPoints }) => {
   return (
      <div style={{ display: "flex" }}>
         {playerPoints.map((points, index) => {
            return (
                  <div  style={{paddingLeft:"30px"}}>Player {index}: {points}</div>
            );
         })}
      </div>
   );
};

export default PlayerPointsDisplay;
