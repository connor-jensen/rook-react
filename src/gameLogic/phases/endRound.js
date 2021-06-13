import { createGameState } from "../helperFunctions";

export const endRound = {
   onBegin: (G, ctx) => {
      const [offensePointsEarned, defensePointsEarned] = calculatePoints(G)
      for (let i = 0; i < 5; i++) {
         if (G.offensiveTeam.includes("" + i)) {
            G.playerPoints[i] += offensePointsEarned;
         } else {
            G.playerPoints[i] += defensePointsEarned;
         }
      }
   },
   endIf: (G) => {
      console.log("in decideTrick endIf");
      // end once all 5 players are ready
      let numPlayersReady = G.playersReady.filter((isReady) => isReady).length;
      console.log(`numPlayersReady: ${numPlayersReady}`);
      return (numPlayersReady === 5)
   },
   onEnd: (G, ctx) => {
      return createGameState(G, ctx, true)
   },
   moves: {
      confirmReady: (G, ctx) => {
         G.playersReady[ctx.currentPlayer] = true;
         ctx.events.endTurn();
      },
   },
   next: 'bidding',
}

function calculatePoints(G){
   let offensePointsEarned = 0
   let defensePointsEarned = 0;
   if (G.offensiveTeamNumTricks >= G.defensiveTeamNumTricks) {
      offensePointsEarned += 20
   } else {
      defensePointsEarned += 20
   }

   offensePointsEarned += G.offensiveTeamPoints;
   defensePointsEarned += G.defensiveTeamPoints;

   if (offensePointsEarned < G.winningBid) {
      offensePointsEarned -= G.winningBid
      G.offenseTeamWon = false;
   } else {
      G.offenseTeamWon = true;
   }

   return [offensePointsEarned, defensePointsEarned]
}