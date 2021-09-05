import React, { useState } from 'react'


const AddMatchForm = ({ addMatch, players }) => {

    const [data, setData] = useState(
        {
            winner: null,
            loser: null,
            winnerScore: [null, null, null, null, null],
            loserScore: [null, null, null, null, null],
            date: null
        }
    )

    const handleWinnerChange = (e) => {
        const newWinnerChangeData = {...data};
        newWinnerChangeData.winner = e.target.value;
        setData(newWinnerChangeData);
    }

    const handleLoserChange = (e) => {
        const newLoserChangeData = {...data};
        newLoserChangeData.loser = e.target.value;
        setData(newLoserChangeData);
    }

    const handleWinnerScoreChange = (i) => (e) => {
        const newWinnerScoreChangeData = {...data};
        newWinnerScoreChangeData.winnerScore[i] = e.target.value;
        setData(newWinnerScoreChangeData);
    }

    const handleLoserScoreChange = (i) => (e) => {
        const newLoserScoreChangeData = {...data};
        newLoserScoreChangeData.loserScore[i] = e.target.value;
        setData(newLoserScoreChangeData);
    }

    const handleDateChange = (e) => {
        const newDateChangeData = {...data};
        newDateChangeData.date = e.target.value;
        setData(newDateChangeData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addMatch(data);

        console.log("Match submitted", data)
    }


    return (
        <>
            <h3>Add new match</h3>
            <button onClick={console.log(data)}>Log data</button>
            <form onSubmit={handleSubmit}>
                <label>Date:
                    <input
                        type="date"
                        value={data.date}
                        onChange={handleDateChange}
                    />
                </label>
                <br/>
                <label>Winner:
                    <select value={data.winner} onChange={handleWinnerChange}>
                        <option value="" disabled selected>Select winner</option>
                        {players && players.map(player => 
                            <option value={player.name} key={player.id}>{player.name}</option>
                        )}
                    </select>
                </label>
                <br/>
                <label>Winner Score:
                    <input
                        type="text"
                        value={data.winnerScore[0]}
                        onChange={handleWinnerScoreChange(0)}
                    />
                    <input
                        type="text"
                        value={data.winnerScore[1]}
                        onChange={handleWinnerScoreChange(1)}
                    />
                    <input
                        type="text"
                        value={data.winnerScore[2]}
                        onChange={handleWinnerScoreChange(2)}
                    />
                </label>
                <br/>
                <label>Loser:
                <select value={data.loser} onChange={handleLoserChange}>
                    <option value="" disabled selected>Select loser</option>
                        {players && players.map(player => 
                            <option value={player.name} key={player.id}>{player.name}</option>
                        )}
                    </select>
                </label>
                <br/>
                <label>Loser Score:
                    <input
                        type="text"
                        value={data.loserScore[0]}
                        onChange={handleLoserScoreChange(0)}
                    />
                    <input
                        type="text"
                        value={data.loserScore[1]}
                        onChange={handleLoserScoreChange(1)}
                    />
                    <input
                        type="text"
                        value={data.loserScore[2]}
                        onChange={handleLoserScoreChange(2)}
                    />
                </label>
                <button type="submit">Submit match</button>
            </form>
        </>
    )
}

export default AddMatchForm;