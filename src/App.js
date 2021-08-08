import React, { useState } from 'react'

import LadderRankings from './components/LadderRankings'
import MatchesDisplay from './components/MatchesDisplay'
import AddMatch from './components/AddMatch'

import { ladder } from './testData'


function App() {

  // const [ladder, setLadder] = useState(null)

  console.log("ladder isArray", Array.isArray(ladder))
  console.log("ladder array", ladder)

  console.log("players isArray", Array.isArray(ladder.players))
  console.log("players array", ladder.players)

  console.log("matches isArray", Array.isArray(ladder.matches))
  console.log("matches array", ladder.matches)
  
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
