import { INVALID_MOVE } from 'boardgame.io/core'
import { sortHand } from '../helperFunctions';

export const postBidding = {
   onBegin: (G, ctx) => {
      console.log("starting handleWidow");

      // give widow cards to player who one the bid,
      // then wait for them to discard two cards (see only available move)
      G.widow[0].owner = G.winningBidPlayer
      G.widow[1].owner = G.winningBidPlayer
      G.hands[G.winningBidPlayer].push(...G.widow);
      sortHand(G.hands[G.winningBidPlayer])
      G.widow = [];
   },
   moves: {
      discardWidowCard,
   },
   turn: {
      order: {
         first: (G, ctx) => G.winningBidPlayer,
         next: (G, ctx) => G.winningBidPlayer,
      },
      stages: {
         pickTrump: {
            moves: { pickTrumpSuit },
            next: "pickAlly",
         },
         pickAlly: {
            moves: { pickAllyByCard },
         },
      },
   },
   // end once teams have been decided
   endIf: (G, ctx) => {
      return (G.offensiveTeam.length === 2 && G.defensiveTeam.length === 3);
   },
   next: "playTrick",
};

// discards a card by index, and once player is down to normal 11 cards,
// move to the next stage
function discardWidowCard(G, ctx, cardIndex) {
   if (G.hands[G.winningBidPlayer][cardIndex].points > 0) {
      console.log("can't discard a card worth points");
      return INVALID_MOVE
   }

   console.log("discarding widow card");
   G.widow.push(G.hands[G.winningBidPlayer].splice(cardIndex, 1)[0]);

   if (G.hands[ctx.currentPlayer].length === 11) {
      ctx.events.setActivePlayers({ currentPlayer: "pickTrump" });
   }
}

// pick suit by string value.
// must be green red blue or yellow
function pickTrumpSuit(G, ctx, suit) {
   console.log("picking trump suit");
   if (["green", "red", "blue", "yellow"].includes(suit)) {
      G.trumpSuit = suit;
      console.log(`trump is ${suit}`);
      ctx.events.setActivePlayers({ currentPlayer: "pickAlly" });
   } else {
      console.log(`error: ${suit} is not a valid suit choice`);
   }
}

// pick an ally by calling a specific card
function pickAllyByCard(G, ctx, suit, number) {
   if (!["blue", "green", "red", "yellow"].includes(suit)){
      console.log("suit input bad")
   }
   if (isNaN(number)) {
      console.log("number input bad")
   }

   console.log(`suit: ${typeof(suit)}, number: ${typeof(number)}`)

   console.log(`calling for the ${number} of ${suit}`);
   // make sure the ally card is not in the widow
   if (
      (G.widow[0].suit === suit && G.widow[0].number === number) ||
      (G.widow[1].suit === suit && G.widow[1].number === number)
   ) {
      console.log("that card is in the widow, you can't pick it");
      return INVALID_MOVE
   } else {
      for (const card of G.hands[ctx.currentPlayer]) {
         if (card.suit === suit && card.number === number) {
            console.log("can't call a card that you own")
            return INVALID_MOVE
         }
      }
   }

   for (let i = 0; i < 5; i++) {
      // player who one bid goes on offensive team
      if (i === Number(ctx.currentPlayer)) {
         G.offensiveTeam.push("" + i);
         continue;
      }

      // player who has card goes on offensive team
      // others go on defensive team
      let card = playerHasCard(G, ctx, i, suit, number)
      if (card) {
         console.log(`player ${i} has the ${number} of ${suit}. Goes on offense`)
         G.calledCard = card;
         G.offensiveTeam.push("" + i);
      } else {
         console.log(`player ${i} goes on defense`)
         G.defensiveTeam.push("" + i);
      }
   }
}

// helper funciton for pickAllyByCard
function playerHasCard(G, ctx, playerIndex, suit, number) {
   // find the player who has the requested card
   for (const card of G.hands[playerIndex]) {
      // if found, put them on offensive team
      if (card.suit === suit && card.number === number) {
         return card;
      }
   }
   return false;
}