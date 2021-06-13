export const playTrick = {
   onBegin: (G, ctx) => {
      console.log("starting playTrick");
   },
   endIf: (G) => {
      console.log("in playTrick endIf");
      const x = { ...G.trickState };
      console.log(x);
      return G.trickState.cards.length === 5;
   },
   turn: {
      order: {
         // on the very first trick of the game, a defensive player goes first
         // after that, whoever won the previous trick leads the current one
         first: (G, ctx) => {
            // play order as defined below won't be set yet, but we know what it _will_ be, so just use this
            const tempPlayOrder = [
               G.offensiveTeam[0],
               G.defensiveTeam[0],
               G.offensiveTeam[1],
               G.defensiveTeam[1],
               G.defensiveTeam[2],
            ];
            if (G.trickState.leadingPlayer === undefined) {          
               for (let i = 0; i < 5; i++) {
                  if (G.defensiveTeam.includes(tempPlayOrder[i])) {
                     return i;
                  }
               }
               console.log("could not find starting player")
               return 0;
            } else {
               for (let i = 0; i < 5; i++) {
                  if (tempPlayOrder[i] === ("" + G.trickState.leadingPlayer)) {
                     return i
                  }
               }
               console.log("could not find leading player")
               return 0;
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
      playCard,
   },
   next: "decideTrick",
};

function playCard(G, ctx, index) {
   let card = G.hands[ctx.currentPlayer].splice(index, 1)[0];
   G.trickState.cards.push(card);
   G.trickState.pointTotal += card.points;
   if (G.trickState.cards.length === 1) {
      G.trickState.suit = card.suit;
      G.trickState.winningCard = card;
   } else {
      G.trickState.winningCard = decideTrick(G, G.trickState.winningCard, card);
   }
   ctx.events.endTurn();
}

function decideTrick(G, cardOne, cardTwo) {

   // if one of the cards is a rook, it beats all non-trump cards
   if (cardOne.suit === "rook") {
      return cardTwo.suit !== G.trumpSuit ? cardOne : cardTwo
   } else if (cardTwo.suit === "rook") {
      return cardOne.suit === G.trumpSuit ? cardOne : cardTwo
   }

   // first decide by suit
   else if (cardOne.suit !== cardTwo.suit) {
      // check if either is trump
      if (cardOne.suit === G.trumpSuit) return cardOne;
      else if (cardTwo.suit === G.trumpSuit) return cardTwo;
      // neither is trump, check which one is currentSuit
      else if (cardOne.suit === G.currentSuit) return cardOne;
      else if (cardTwo.suit === G.currentSuit) return cardTwo;
   }

   // suits are equal, decide by priority
   return cardOne.priority > cardTwo.priority ? cardOne : cardTwo;
}
