import React, { useState } from 'react'

import { addMatch } from '../testData.js'


const AddMatch = () => {

    const [date, setDate] = useState("")
    const [winner, setWinner] = useState("")
    const [winnerScore, setWinnerScore] = useState("")
    const [loser, setLoser] = useState("")
    const [loserScore, setLoserScore] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        addMatch({date, winner, loser, winnerScore, loserScore});

        console.log("Match submitted!")

    }

    return (
        <>
            <h4>Add new match</h4>
            <form onSubmit={handleSubmit}>
                <label>Date:
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </label>
                <br/>
                <label>Winner:
                    <input
                        type="text"
                        value={winner}
                        onChange={e => setWinner(e.target.value)}
                    />
                </label>
                <br/>
                <label>Winner Score:
                    <input
                        type="text"
                        value={winnerScore}
                        onChange={e => setWinnerScore(e.target.value)}
                    />
                </label>
                <br/>
                <label>Loser:
                    <input
                        type="text"
                        value={loser}
                        onChange={e => setLoser(e.target.value)}
                    />
                </label>
                <br/>
                <label>Loser:
                    <input
                        type="text"
                        value={loserScore}
                        onChange={e => setLoserScore(e.target.value)}
                    />
                </label>
                <button type="submit">Submit match</button>
            </form>
        </>
    )
}

export default AddMatch;