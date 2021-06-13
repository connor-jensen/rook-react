import React from 'react';

const SubmitReady = ({moves}) => {
   return (<button onClick={() => moves.confirmReady()}>Ready</button>);
}
 
export default SubmitReady;