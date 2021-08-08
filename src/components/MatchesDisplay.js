import React from 'react'


const LadderRankings = ({matches}) => {
    
    console.log("matches isArray", Array.isArray(matches))
    console.log("matches array", matches)

    
    return (
        <>
      <h3>Games</h3>
      <ul>
        {matches ? matches.sort((p1, p2) => p1.ranking > p2.ranking ? 1 : -1).map(match => 
          <li>Winner: {match.winner}, Loser: {match.loser}</li>) :
          <li>No games added</li>
        }  
      </ul>
        </>
    )
}

export default LadderRankings;