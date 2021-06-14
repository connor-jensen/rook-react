import { SocketIO } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";
import { useParams } from "react-router-dom";
import { RookGame } from "./gameLogic/game";
import { Debug } from 'boardgame.io/debug'
import RookUI from "./ui/Main";

const RookClient = ({ debug }) => {
   const { playerID, matchID } = useParams();

   // <hostname>/test
   if (debug === "test") {
      const DebugRookClient = Client({
         game: RookGame,
         board: RookUI,
         numPlayers: 5,
         debug: { impl: Debug},
      });
      return <DebugRookClient matchID={"test"} playerID={"0"} />;
   }

   // <hostname>/matchId/playerId
   // example: https://fivehandrook.herokuapp.com/0/0
   else {
      const MultiplayerRookClient = Client({
         game: RookGame,
         board: RookUI,
         numPlayers: 5,
         // multiplayer: SocketIO({server: `https://${window.location.hostname}`}),
         multiplayer: SocketIO({server: `192.168.0.114:8000`}),

         // multiplayer: SocketIO({ server: `localhost:8000` }),
      });
      return <MultiplayerRookClient matchID={matchID} playerID={playerID} />;
   } 
};

export default RookClient