import React, { useState, useEffect } from 'react'
import './index.css'

import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import MatchesDisplay from './components/MatchesDisplay'
import AddMatchForm from './components/AddMatchForm'

import { fetchMatches, postNewMatch } from './testData'


function App() {

  const [matches, setMatches] = useState(null);

  const addNewMatch = ({date, winner, loser, winnerScore, loserScore}) => {
    postNewMatch({date, winner, loser, winnerScore, loserScore});
    setMatches([{date, winner, loser, winnerScore, loserScore}, ...matches])
  }

  useEffect(() => {
    fetchMatches().then(response => setMatches(response))
  },[])
  
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
        <AddMatchForm addMatch={addNewMatch}/>
        <MatchesDisplay matches={matches}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
