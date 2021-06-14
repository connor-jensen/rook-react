import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RookClient from "./RookClient";
import Center from "./ui/Center";
const App = () => {
   const [gameNum, setGameNum] = useState(0);
   const [playerNum, setPlayerNum] = useState(0);

   return (
      <div>
         <Router>
            <Switch>
               <Route path="/" exact>
                  <div
                     style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        paddingTop: "50px",
                     }}
                  >
                     <Center>
                        Join game
                        <select
                           onChange={(e) => {
                              setGameNum(Number(e.target.value));
                           }}
                        >
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                        </select>
                        as player
                        <select
                           onChange={(e) => {
                              setPlayerNum(Number(e.target.value));
                           }}
                        >
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                        </select>
                        <button
                           onClick={(e) => {
                              e.preventDefault();
                              window.location.href=`/${gameNum}/${playerNum}`
                           }}
                        >
                           Join Game!
                        </button>
                     </Center>
                  </div>
               </Route>
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
