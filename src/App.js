import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RookClient from "./RookClient";
import Center from "./ui/Center";
import styled from "styled-components";

const Title = styled.h1`
   font-size: 4rem;
   background: -webkit-linear-gradient(45deg, rgb(255, 26, 129), rgb(187, 0, 230), rgb(68, 51, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

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
                        <Title>
                           Rook
                        </Title>
                     </Center>
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
