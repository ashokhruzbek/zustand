import React from 'react'
import { usePlayerStore } from './zustand/playerStore'

function App({}) {
  const {players, addPlayer} = usePlayerStore(state => state)
  console.log(players);

  return (
    <div>
      <button onClick={()=> addPlayer("Zlatan")}>Add</button>
    </div>
  )
}

export default App