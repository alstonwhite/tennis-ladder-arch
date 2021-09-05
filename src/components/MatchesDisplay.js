import React from 'react'


const MatchesDisplay = ({ matches, players }) => {
    
    return (
      <div className="matches-grid-wrapper">
        <h3 className="matches-grid__title">Games</h3>
        <div className="matches-grid__heading">
          <h4 className="player-head">Players</h4>
          <h4 className="rank-head">Ranking</h4>
          <h4 className="date-head">Date</h4>
          <h4 className="score-head">Score</h4>
        </div>
        <div className="matches-grid">
          {matches ? matches.map(match => 
            <div className="matches-grid__game">  
              <div className="matches-grid__player">
                <div className="player">{match.winner}</div>
                <div className="rank">{players.find(player => player.name === match.winner).ranking}</div>
                <div className="date">{match.date}</div>
                <div className="score-container">{match.winnerScore.map(score => 
                  <div className="score-item">{score}</div>
                )}
                </div>
              </div>
              <div className="matches-grid__player">
                <div className="player">{match.loser ? match.loser : "No winner entered"}</div>
                <div className="rank">{players.find(player => player.name === match.loser).ranking}</div>
                <div className="date"></div>
                <div className="score-container">{match.loserScore.map(score => 
                  <div className="score-item">{score}</div>
                )}
                </div>
              </div>
            </div>
          ) : <div className="matches-grid__game">No matches added</div>} 
        </div>
      </div>
    )
}

export default MatchesDisplay;