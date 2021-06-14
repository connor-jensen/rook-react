import React from "react";
import BiddingUI from "./Bidding";
import PlayTrick from "./PlayTrick";
import PostBiddingUI from "./PostBidding";
import SubmitReady from "./SubmitReady";
import Hand from "./Hand";

/**
 *
 * @param {String} param0
 */
const PhaseSwitcher = ({ phase, stage, G, ctx, moves, playerID }) => {
   if (playerID === ctx.currentPlayer) {
      switch (phase) {
         // see ./gameLogic/game.js for phases. these strings are used as keys to match the phases defined there
         case "bidding":
            return (
               <BiddingUI moves={moves} G={G} ctx={ctx} playerID={playerID} />
            );
         case "postBidding":
            return (
               <PostBiddingUI
                  G={G}
                  ctx={ctx}
                  playerID={playerID}
                  moves={moves}
                  stage={stage}
                  cards={G.hands[ctx.currentPlayer]}
               />
            );
         case "playTrick":
            return (
               <PlayTrick
                  cards={G.hands[ctx.currentPlayer]}
                  moves={moves}
                  trickState={G.trickState}
                  ctx={ctx}
                  playerID={playerID}
               />
            );
         case "decideTrick":
            return <SubmitReady moves={moves} playerID={playerID} ctx={ctx} />;
         case "endRound":
            return <SubmitReady moves={moves} playerID={playerID} ctx={ctx} />;

         default:
            return <div>Error: No matching phase found</div>;
      }
   } else {
      return (
         <div>
            <div>Waiting for {G.playerNames[ctx.currentPlayer]}</div>
            <Hand cards={G.hands[Number(playerID)]} />
         </div>
      );
   }
};

export default PhaseSwitcher;
