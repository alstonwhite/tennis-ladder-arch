import React from 'react'


const LadderRankings = ({players}) => {
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th></th>
                    <th>Player</th>
                    <th>W</th>
                    <th>L</th>
                </tr>
            </thead>
            <tbody>
                {players && players.map(player => (
                    <tr>
                        <td>{player.ranking}</td>
                        <td>Image</td>
                        <td>{player.name}</td>
                        <td>{player.wins}</td>
                        <td>{player.losses}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default LadderRankings;