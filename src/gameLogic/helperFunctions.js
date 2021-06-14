import { sortedDeck } from "./gameObjects/deck";

export function createGameState(G, ctx, continueCurrentGame) {
   
   let playerPoints = [0,0,0,0,0]
   if (continueCurrentGame) {
      playerPoints = G.playerPoints;
   }


   let shouldContinue = false;
   let calledCard = undefined
   let playersBidding = [true, true, true, true, true];
   let playersReady = [false, false, false, false, false];
   let offensiveTeam = [];
   let defensiveTeam = [];
   let offensiveTeamNumTricks = 0;
   let defensiveTeamNumTricks = 0;
   let winningBid = 100;
   let winningBidPlayer = -1;
   let hands = [[], [], [], [], []];
   let deck = ctx.random.Shuffle(sortedDeck);
   let trumpSuit = "any";
   let offensiveTeamPoints = 0;
   let defensiveTeamPoints = 0;
   let offenseTeamWon = undefined;
   let trickState = {
      suit: "any",
      cards: [],
      winningCard: undefined,
      leadingPlayer: undefined,
      pointTotal: 0,
   };
   for (let i = 0; deck.length > 2; i++) {
      let card = { ...deck.pop(), owner: i % 5 };
      hands[i % 5].push(card);
   }
   for (let i = 0; i < 5; i++) {
      sortHand(hands[i])
   }
   let widow = deck.slice();
   return {
      shouldContinue,
      offenseTeamWon,
      calledCard,
      playerPoints,
      trickState,
      offensiveTeam,
      defensiveTeam,
      playersBidding,
      playersReady,
      winningBid,
      winningBidPlayer,
      hands,
      widow,
      trumpSuit,
      offensiveTeamPoints,
      defensiveTeamPoints,
      offensiveTeamNumTricks,
      defensiveTeamNumTricks,
   }
}

export function sortHand(cards) {
   cards.sort((a, b) => {
      if (a.suit === "rook") {
         return -1
      } else if (b.suit === "rook") {
         return 1
      }
       else if (a.suit < b.suit) {
         return -1
      } else  if (a.suit > b.suit) {
         return 1
      } else {
         return b.priority - a.priority
      }
   })
}