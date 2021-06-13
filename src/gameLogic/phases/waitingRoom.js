export const waitingRoom = {
   start: true,
   endIf: (G) => {
      let numPlayersReady = G.playersReady.filter((isReady) => isReady).length;
      console.log(`numPlayersReady: ${numPlayersReady}`);
      return (numPlayersReady === 5)
   },
   onEnd: (G, ctx) => {
      for (let i = 0; i < 5; i++) {
         G.playersReady[i] = false;
      }
   },
   moves: {
      confirmReady: (G, ctx) => {
         G.playersReady[ctx.currentPlayer] = true;
         ctx.events.endTurn();
      },
   },
   next: 'bidding'
}