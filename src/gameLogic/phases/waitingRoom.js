import { ActivePlayers } from 'boardgame.io/core'
import { waitConfirmation } from '../helperFunctions';

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
         waitConfirmation
      },
   },
   next: "bidding",
};
