import React from 'react'
import { Link } from "react-router-dom"


const LadderRankings = ({players}) => {
    
    return (
        <div className="rankings-grid-wrapper">
            <h3 className="rankings-grid__title">Ladder Rankings</h3>
            <div className="rankings-grid__heading">
                <h4 className="rankings__rank-head">Ranking</h4>
                <h4 className="rankings__player-head">Players</h4>
                <h4 className="rankings__wins-head">W</h4>
                <h4 className="rankings__losses-head">L</h4>
            </div>
            <div className="rankings-grid">
            {players ? players.sort((p1, p2) => p1.ranking > p2.ranking ? 1 : -1).map(player => 
                <Link to={`/player/${player.id}`} className="rankings-grid__player">
                    <div className="rankings__rank">{player.ranking}</div>
                    <div className="rankings__player">{player.name}</div>
                    <div className="rankings__wins">wins</div>
                    <div className="rankings__losses">losses</div>
                </Link>
          ) : <div className="matches-grid__player">No players added</div>} 
            </div>
        </div>
    )
}

export default LadderRankings;