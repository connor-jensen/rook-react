import { ActivePlayers } from 'boardgame.io/core'

export const waitingRoom = {
   start: true,
   onBegin: (G, ctx) => {
      ctx.events.setActivePlayers({all: 'waitConfirmation', moveLimit: 1})
   },
   endIf: (G) => {
      let numPlayersReady = G.playersReady.filter((isReady) => isReady).length;
      console.log(`numPlayersReady: ${numPlayersReady}`);
      return numPlayersReady === 5;
   },
   onEnd: (G, ctx) => {
      for (let i = 0; i < 5; i++) {
         G.playersReady[i] = false;
      }
   },
   turn: {
      stages: {
         waitConfirmation: {
            moves: {
               confirmReady: (G, ctx, name) => {
                  if (name === "enter your name"){
                     name = `player ${ctx.playerID + 1}`
                  } else {
                     G.playerNames[ctx.playerID] = name
                  }
                  G.playersReady[ctx.playerID] = true;
               },
            },
         },
      },
   },
   next: "bidding",
};
