import style from 'styled-components'
import './App.css'
import StartGame from './components/StartGame'
import { useState } from 'react'
import GamePlay from './components/GamePlay';

function App() {
  const [isGamePlayed, setIsGamePlayed]=useState(false);
  const toggleGamePlay=()=>{
    setIsGamePlayed(prev=>!prev)
  }

  return (
    <>
      {isGamePlayed ? <GamePlay /> : <StartGame toggle={toggleGamePlay}  />}
      {/* <StartGame /> */}
    </>
  )
}

export default App

const Button=style.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`
