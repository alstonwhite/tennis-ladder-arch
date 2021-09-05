import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css'

import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PlayerPage from './components/PlayerPage'

import { fetchPlayers, fetchMatches, postNewMatch } from './testData'


function App() {

  const [players, setPlayers] = useState(null);
  const [matches, setMatches] = useState(null);

  const addNewMatch = ({date, winner, loser, winnerScore, loserScore}) => {
    postNewMatch({date, winner, loser, winnerScore, loserScore});
    setMatches([{date, winner, loser, winnerScore, loserScore}, ...matches])
  }

  useEffect(() => {
    fetchPlayers().then(response => setPlayers(response))
    fetchMatches().then(response => setMatches(response))
  },[])
  
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Header/>
          <HomePage matches={matches} players={players} addNewMatch={addNewMatch}/>
          <Switch>
            <Route path="/player/:id" children={
              <PlayerPage players={players}/>
              }>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
