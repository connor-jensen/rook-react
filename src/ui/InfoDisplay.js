import Hand from "./Hand";
import Card from "./Card";
import TrickDisplay from "./TrickDisplay";

const InfoDisplay = ({ G, ctx, phase, stage, playerID }) => {
   switch (phase) {
      case "bidding":
         return (
            <div>
               <div>It is {G.playerNames[ctx.currentPlayer]}'s turn</div>
               <div>Current bid: {G.winningBid}</div>
            </div>
         );
      case "postBidding":
         return (
            <div>
               <div>It is {G.playerNames[ctx.currentPlayer]}'s turn</div>
               <div>Current bid: {G.winningBid}</div>
            </div>
         );
      case "playTrick":
         return (
            <div>
               <div>It is {G.playerNames[ctx.currentPlayer]}'s turn</div>
               <div>
                  Team 1:{" " + G.offensiveTeamPoints} points. Players:
                  {G.offensiveTeam.map((number) => {
                     return ` ${G.playerNames[Number(number)]}, `;
                  })}
               </div>
               <div>
                  Team 2:{" " + G.defensiveTeamPoints} points. Players:
                  {G.defensiveTeam.map((number) => {
                     return ` ${G.playerNames[Number(number)]}, `;
                  })}
               </div>
               <div style={{ display: "flex" }}>
                  <div>called card: </div>
                  <Card card={G.calledCard} />
               </div>
               <div >Trump suit:<span className={G.trumpSuit} style={{padding:"4px"}}>{G.trumpSuit}</span></div>
               <h4>Current trick:</h4>
               <TrickDisplay
                  trickState={G.trickState}
                  offensiveTeam={G.offensiveTeam}
                  defensiveTeam={G.defensiveTeam}
                  turnOrder={ctx.playOrder}
                  playerID={playerID}
               />
            </div>
         );
      case "decideTrick":
         return (
            <div>
               <div>
                  Team 1:{" " + G.offensiveTeamPoints} points. Players:
                  {G.offensiveTeam.map((number) => {
                     return ` ${G.playerNames[Number(number)]}, `;
                  })}
               </div>
               <div>
                  Team 2:{" " + G.defensiveTeamPoints} points. Players:
                  {G.defensiveTeam.map((number) => {
                     return ` ${G.playerNames[Number(number)]}, `;
                  })}
               </div>
               <div>---------------</div>

               <TrickDisplay
                  names={G.playerNames}
                  trickState={G.trickState}
                  offensiveTeam={G.offensiveTeam}
                  defensiveTeam={G.defensiveTeam}
                  turnOrder={ctx.playOrder}
                  playerID={playerID}
               />

               <h3>waiting for:</h3>
               <ul>
                  {G.playersReady.map((isReady, index) => {
                     return isReady ? null : <div>player {G.playerNames[Number(index)]}</div>;
                  })}
               </ul>
            </div>
         );
      default:
         return (
            <div>
               <TrickDisplay
                  names={G.playerNames}
                  trickState={G.trickState}
                  offensiveTeam={G.offensiveTeam}
                  defensiveTeam={G.defensiveTeam}
                  turnOrder={ctx.playOrder}
               />
            </div>
         );
   }
};

export default InfoDisplay;
