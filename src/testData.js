import logo from './emoji.png'

export const ladder = {
  players: [
    {
      name: "Nizzard",
      id: 1,
      img: logo,
      ranking: 1,
      hometown: "Dallas, TX",
      bio: "stretch",
      height: "8' 4\"",
      weight: "190",
      handedness: "Right"
    },
    {
      name: "Matt J",
      id: 2,
      img: logo,
      ranking: 2,
      hometown: "Concord, MA",
      bio: "jap",
      height: "6' 0\"",
      weight: "145",
      handedness: "Right"
    }
  ],
  matches: [
    {
      date: "1.1.21",
      winner: "Nizzard",
      loser: "Matt J",
      winnerScore: [6, 4, 6, null, null],
      loserScore: [3, 6,4, null, null]
    },
    {
      date: "1.2.21",
      winner: "Matt J",
      loser: "Nizzard",
      winnerScore: [3, 3, null, null, null],
      loserScore: [6, 6, null, null, null]
    }
  ]
}

export const fetchMatches = async () => {
  return ladder.matches;
}

export const postNewMatch = async (match) => {
  ladder.matches.push(match)
  console.log("postMatch matches", ladder.matches)
}