import React from 'react'

import LadderRankings from './LadderRankings'
import MatchesDisplay from './MatchesDisplay'
import AddMatchForm from './AddMatchForm'

const HomePage = ({ players, matches, addNewMatch }) => {

    return (
        <>
            <LadderRankings players={players}/>
            <AddMatchForm addMatch={addNewMatch} players={players}/>
            <MatchesDisplay matches={matches} players={players}/>
        </>
    )
}

export default HomePage;