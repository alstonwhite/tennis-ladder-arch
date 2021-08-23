import React, { useState } from 'react'

import LadderRankings from './components/LadderRankings'
import MatchesDisplay from './components/MatchesDisplay'
import AddMatch from './components/AddMatch'

import { ladder } from './testData'


function App() {
  
  return (
    <>
      <h1>Toucan Tour Tennis Ladder</h1>
      <AddMatch/>
      <LadderRankings players={ladder.players}/>
      <MatchesDisplay matches={ladder.matches}/>
    </>
  );
}

export default App;
