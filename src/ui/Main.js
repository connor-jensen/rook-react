import React from "react";
import PhaseSwitcher from "./PhaseSwitcher";
import InfoDisplay from "./InfoDisplay";
import PlayerPointsDisplay from "./PlayerPoints";
import SubmitReady from "./SubmitReady";

class RookUI extends React.Component {
   render() {
      let phase = this.props.ctx.phase;

      let stage = this.props.ctx.activePlayers
         ? this.props.ctx.activePlayers[this.props.ctx.currentPlayer]
         : "no stage";

      if (phase === "waitingRoom") {
         return (
            <div>
               <div>waiting for all players to join</div>
               <h3>waiting for:</h3>
               <ul>
                  {this.props.G.playersReady.map((isReady, index) => {
                     return isReady ? null : <div>player {index}</div>;
                  })}
               </ul>
               <SubmitReady moves={this.props.moves}/>
            </div>
         )
      }
      return (
         <div>
            <PlayerPointsDisplay playerPoints={this.props.G.playerPoints} />
            <div style={{ display: "flex" }}>
               <div className="info">
                  <h2>Info (non-interactive):</h2>
                  <InfoDisplay
                     playerID={this.props.playerID}
                     G={this.props.G}
                     ctx={this.props.ctx}
                     moves={this.props.moves}
                     phase={phase}
                     stage={stage}
                  />
               </div>
               <div className="actions" style={{ marginLeft: "50px" }}>
                  <h2>Actions (interactive):</h2>
                  {this.props.playerID === this.props.ctx.currentPlayer ? <div>Your turn!</div> : null}
                  <PhaseSwitcher
                     playerID={this.props.playerID}
                     phase={phase}
                     stage={stage}
                     G={this.props.G}
                     ctx={this.props.ctx}
                     moves={this.props.moves}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default RookUI;
