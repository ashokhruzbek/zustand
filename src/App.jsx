import React from 'react'
import { usePlayerStore } from './zustand/playerStore'

function App({}) {
  const {players, addPlayer, removePlayer} = usePlayerStore(state => state)
  console.log(players);

  return (
    <div>
      <ul>
        {
          players.map((player, index)=>(
            <li key={index}>{player} <button onClick={()=> removePlayer (index)} style={{cursor: "pointer"}}> X </button></li>
          ))
        }
      </ul>
      <button onClick={()=> addPlayer("Zlatan")}>Add Player</button>
    </div>
  )
}

export default App