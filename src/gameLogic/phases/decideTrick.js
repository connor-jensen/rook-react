export const decideTrick = {
   onBegin: (G, ctx) => {
      // assign points to winner of trick and set them as the starting
      // player for next round
      console.log("starting decideTrick");
      const winningPlayerIndex = G.trickState.winningCard.owner;
      G.trickState.leadingPlayer = winningPlayerIndex;
      if (G.offensiveTeam.includes("" + winningPlayerIndex)) {
         G.offensiveTeamPoints += G.trickState.pointTotal;
         G.offensiveTeamNumTricks++;
      } else {
         G.defensiveTeamPoints += G.trickState.pointTotal;
         G.defensiveTeamNumTricks++;
      }
      console.log("ending phase in 5 seconds...")
      setTimeout(() => {
         ctx.events.endPhase();
      }, 5000)
   },
   endIf: (G) => {
      console.log("in decideTrick endIf");
      // end once all 5 players are ready
      let numPlayersReady = G.playersReady.filter((isReady) => isReady).length;
      console.log(`numPlayersReady: ${numPlayersReady}`);
      if (numPlayersReady === 5) {
         // reset trickstate except leadingPlayer
         if (G.hands[0].length !== 0) {
            return { next: "playTrick" };
         } else {
            return { next: "endRound" };
         }
      }
   },
   onEnd: (G, ctx) => {
      // reset trick state and ready
      G.trickState.suit = "any";
      G.trickState.cards = [];
      G.trickState.winningCard = undefined;
      G.trickState.pointTotal = 0;

      for (let i = 0; i < 5; i++) {
         G.playersReady[i] = false;
      }
   },
   turn: {
      order: {
         // on the very first trick of the game, a defensive player goes first
         // after that, whoever won the previous trick leads the current one
         first: (G, ctx) => {
            if (G.trickState.leadingPlayer === undefined) {
               // play order as defined below won't be set yet, but we know what it _will_ be, so just use this
               const tempPlayOrder = [
                  G.offensiveTeam[0],
                  G.defensiveTeam[0],
                  G.offensiveTeam[1],
                  G.defensiveTeam[1],
                  G.defensiveTeam[2],
               ];
               for (let i = 0; i < 5; i++) {
                  if (G.defensiveTeam.includes(tempPlayOrder[i])) {
                     return i;
                  }
               }
               return 0;
            } else {
               return G.trickState.leadingPlayer;
            }
         },
         next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.numPlayers,
         playOrder: (G, ctx) => [
            G.offensiveTeam[0],
            G.defensiveTeam[0],
            G.offensiveTeam[1],
            G.defensiveTeam[1],
            G.defensiveTeam[2],
         ],
      },
   },
   moves: {
      confirmReady: (G, ctx) => {
         G.playersReady[ctx.currentPlayer] = true;
         ctx.events.endTurn();
      },
   },
   next: "playTrick",
};

function setAllPlayersReady(G, ctx) {
   for (let i = 0; i < 5; i++) {
      G.playersReady[i] = true;
   }
}
