import React from 'react'


const LadderRankings = ({matches}) => {
    
    console.log("matches isArray", Array.isArray(matches))
    console.log("matches array", matches)

    
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
              <div>{match.winner ? match.winner : "No winner entered"}</div>
              <div>{match.date ? match.date : "No date entered"}</div>
              <div>{match.winner.rank ? match.winner.rank : "No ranking entered"}</div>
              <div>{match.winner.score ? match.winner.score : "No score entered"}</div>
            </div>
            <div className="matches-grid__player">
              <div>{match.loser ? match.loser : "No winner entered"}</div>
              <div></div>
              <div>{match.loser.rank ? match.loser.rank : "No ranking entered"}</div>
              <div>{match.loser.score ? match.loser.score : "No score entered"}</div>
            </div>
          </div>
        ) : <div className="matches-grid__game">No matches added</div>} 
      </div>
    )
}

export default LadderRankings;