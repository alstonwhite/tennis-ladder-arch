import React, { useState, useEffect } from 'react'

import { fetchMatches } from '../testData'


const MatchesDisplay = ({ matches, players }) => {
    
    return (
      <div className="matches-grid">
        <h3 className="matches-grid__title">Games</h3>
        <div className="matches-grid__heading">
          <h4>Players</h4>
          <h4>Date</h4>
          <h4>Ranking</h4>
          <h4>Score</h4>
        </div>
        {matches ? matches.sort((p1, p2) => p1.ranking > p2.ranking ? 1 : -1).map(match => 
          <div className="matches-grid__game">  
            <div className="matches-grid__player">
              <div>{match.winner}</div>
              <div>{match.date}</div>
              <div>{players.find(player => player.name === match.winner).ranking}</div>
              <div lassName="score-container">{match.winnerScore.map(score => 
                <div className="score-item">{score}</div>
              )}
              </div>
            </div>
            <div className="matches-grid__player">
              <div>{match.loser ? match.loser : "No winner entered"}</div>
              <div></div>
              <div>{players.find(player => player.name === match.loser).ranking}</div>
              <div className="score-container">{match.loserScore.map(score => 
                <div className="score-item">{score}</div>
              )}
              </div>
            </div>
          </div>
        ) : <div className="matches-grid__game">No matches added</div>} 
      </div>
    )
}

export default MatchesDisplay;