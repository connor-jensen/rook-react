import React from 'react';

const SubmitReady = ({moves, playerName}) => {
   return (<button onClick={() => moves.confirmReady(playerName)}>Ready</button>);
}
 
export default SubmitReady;