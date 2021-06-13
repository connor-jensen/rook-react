export const bidding = {
   endIf: (G) => {
      let numPlayersStillBidding = G.playersBidding.filter(
         (isStillBidding) => isStillBidding
      ).length;
      return numPlayersStillBidding === 1;
   },
   next: "postBidding", // in ./postBidding.js
   moves: {
      bid5: (G, ctx) => {
         G.winningBid += 5;
         G.winningBidPlayer = Number(ctx.currentPlayer);
         ctx.events.endTurn();
      },
      bid10: (G, ctx) => {
         G.winningBid += 10;
         G.winningBidPlayer = Number(ctx.currentPlayer);
         ctx.events.endTurn();
      },
      bid15: (G, ctx) => {
         G.winningBid += 15;
         G.winningBidPlayer = Number(ctx.currentPlayer);
         ctx.events.endTurn();
      },
      passBid: (G, ctx) => {
         G.playersBidding[Number(ctx.currentPlayer)] = false;
         ctx.events.endTurn();
      },
   },
   turn: {
      order: {
         first: (G, ctx) => Math.floor(Math.random() * 5),
         next: (G, ctx) => {
            for (let i = 1; i < 5; i++) {
               let nextPlayerIndex = (ctx.playOrderPos + i) % ctx.numPlayers;
               console.log(`checking playerPos ${nextPlayerIndex}`);
               if (G.playersBidding[nextPlayerIndex]) {
                  return nextPlayerIndex;
               }
            }
            console.log("couldn't find next bidding player");
            return -1;
         },
      },
   },
};
