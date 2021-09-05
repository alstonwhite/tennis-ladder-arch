import React from 'react'
import { useParams } from "react-router-dom"


const PlayerPage = ({ matches, players }) => {

  const { id } = useParams();
//   const player = players.find(player => player.id === id);
  console.log("player page - id", id)
    
    return (
        <div className="player-page-wrapper">
            {/* {player && <h3 className="player-page__title">{player.name}</h3>} */}
        </div>
    )
}

export default PlayerPage;