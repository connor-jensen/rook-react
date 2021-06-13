import React from "react";
import DiscardWidow from "./DiscardWidow";
import PickAlly from "./PickAlly";
import PickTrump from "./PickTrump";
import Hand from "./Hand"

const PostBiddingUI = ({ G, moves, stage, cards, playerID}) => {
   switch (stage) {
      case "no stage":
         return <DiscardWidow cards={cards} moves={moves} />;
      case "pickTrump":
         return (
            <div>
               <PickTrump moves={moves} />
               <Hand cards={G.hands[Number(playerID)]}/>
            </div>
         );
      case "pickAlly":
         return (
            <div>
               <PickAlly moves={moves} />
               <Hand cards={G.hands[Number(playerID)]}/>
            </div>
         );
      default:
         return <div>error: no matching stage found in postBiddingUI</div>;
   }
};

export default PostBiddingUI;
