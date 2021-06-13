import React from "react";
import Hand from "./Hand";

const BiddingUI = ({G, ctx, moves, playerID }) => {

   if (playerID === ctx.currentPlayer) {
      return (
         <div>
            <button onClick={() => moves.bid5()}>Bid {G.winningBid + 5}</button>
            <button onClick={() => moves.bid10()}>Bid {G.winningBid + 10}</button>
            <button onClick={() => moves.bid15()}>Bid {G.winningBid + 15}</button>
            <button onClick={() => moves.passBid()}>Pass</button>
            <Hand cards={G.hands[Number(playerID)]}/>
         </div>
      );
   } else {
      return (
         <div>waiting for player {ctx.currentPlayer} to bid</div>
      )
   }

   
};

export default BiddingUI;
