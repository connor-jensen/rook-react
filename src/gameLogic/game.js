import { waitingRoom } from "./phases/waitingRoom";
import { bidding } from "./phases/bidding";
import { postBidding } from "./phases/postBidding";
import { playTrick } from "./phases/playTrick";
import { decideTrick } from "./phases/decideTrick";
import { endRound } from "./phases/endRound";
import { createGameState, sortHand } from "./helperFunctions";

export const RookGame = {
   setup: (ctx) => createGameState(null, ctx, false), // returns a fresh grame state, with all scores set to 0.
   phases: {
      waitingRoom,
      bidding,
      postBidding,
      playTrick,
      decideTrick,
      endRound,
   },
};