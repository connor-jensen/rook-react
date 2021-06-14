// import { SocketIO } from "boardgame.io/multiplayer";
// import { Client, Lobby } from "boardgame.io/react";
// import { useState } from "react";
// import { RookGame } from "./gameLogic/game";
// import RookUI from "./ui/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RookClient from './RookClient'

// for local server + client combo
// const App = Client({
//    game: RookGame,
//    numPlayers: 5,
//    board: RookUI,
// });

// const { protocol, hostname, port } = window.location;
// const server = `${protocol}//${hostname}:${port}`;

// const RookClient = Client({
//    game: RookGame,
//    board: RookUI,
//    numPlayers: 5,
//    multiplayer: SocketIO({server: `https://${window.location.hostname}`}),
//    // multiplayer: SocketIO({server: `localhost:8000`}),
//    debug: true
// });

// const App = () => {
//    const [id, setId] = useState(-1);

//    if (id === -1) {
//       return (
//          <div>
//             <div>which player are you?</div>
//             <select
//                onChange={(e) => {
//                   if (e.target.value !== "(nothing)") {
//                      setId(Number(e.target.value));
//                   }
//                }}
//             >
//                <option>(nothing)</option>
//                <option>0</option>
//                <option>1</option>
//                <option>2</option>
//                <option>3</option>
//                <option>4</option>
//             </select>
//          </div>
//       );
//    }

//    else {
//       return (
//          <RookClient playerID={"" + id} />
//       )
//    }
// };

const App = () => {
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/test">
                  <RookClient debug={"test"} />
               </Route>
               <Route path="/:matchID/:playerID">
                  <RookClient />
               </Route>
            </Switch>
         </Router>
      </div>
   );
};

export default App;
