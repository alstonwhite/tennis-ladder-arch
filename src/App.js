import React, { useState } from 'react'

import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import LadderRankings from './components/LadderRankings'
import MatchesDisplay from './components/MatchesDisplay'
import AddMatch from './components/AddMatch'

import { ladder } from './testData'


function App() {
  
  return (
    <>
      <ThemeProvider>
        <Header/>
        <AddMatch/>
        <LadderRankings players={ladder.players}/>
        <MatchesDisplay matches={ladder.matches}/>
      </ThemeProvider>
    </>
  );
}

export default App;
