import React, { useEffect, useState } from 'react'


const AddMatchForm = ({ addMatch }) => {

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
        console.log("i: ", i, "e.target.value: ", e.target.value);
        const newWinnerScoreChangeData = {...data};
        newWinnerScoreChangeData.winnerScore[i] = e.target.value;
        setData(newWinnerScoreChangeData);
    }

    const handleLoserScoreChange = (i) => (e) => {
        console.log("i: ", i, "e.target.value: ", e.target.value);
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

    // useEffect(() => {
    //     console.log("useEffect data", data)
    // })


    return (
        <>
            <h4>Add new match</h4>
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
                    <input
                        type="text"
                        value={data.winner}
                        onChange={handleWinnerChange}
                    />
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
                    <input
                        type="text"
                        value={data.loser}
                        onChange={handleLoserChange}
                    />
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