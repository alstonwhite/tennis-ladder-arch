import logo from './emoji.png'

export const ladder = {
  players: [
    {
      name: "Nizzard",
      img: logo,
      ranking: 2,
      wins: 3,
      losses: 1
    },
    {
      name: "Matt J",
      img: logo,
      ranking: 1,
      wins: 2,
      losses: 1
    },
    {
      name: "Chuck",
      img: logo,
      ranking: 3,
      wins: 3,
      losses: 3
    },
    {
      name: "Tray",
      img: logo,
      ranking: 3,
      wins: 2,
      losses: 3
    }
  ],
  matches: [
    {
      date: "07/27.21",
      winner: "Nizzard",
      loser: "Chuck",
      winnerScore: [6, 4, 6],
      loserScore: [3, 6,4]
    }
  ]
}

  export const addMatch = async (match) => {
    ladder.matches.push(match)
  }