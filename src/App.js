import React, { useState, useEffect } from 'react'

import './App.css'

import IconButton from './components/IconButton'
import ScoreText from './components/ScoreText'


import {
  FiOctagon,
} from 'react-icons/fi'

import {
  IoNewspaperOutline
} from 'react-icons/io5'

import {
  RiScissorsFill
} from 'react-icons/ri'

const App = () => {

  // variables 

  let playerChoice = ""
  let compChoice = ""

  const choices = [
    "rock",
    "paper",
    "scissor"
  ]

  // states

  const [playerScore, setPlayerScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [conditionText, setConditionText] = useState("")

  // effect

  useEffect(() => {
    document.title = "Rock Paper Scissors"
  })

  // functions



  function changeScores() {

    if (playerScore===5) {
          alert("You Won (Please Reset To Play Again)")
          setConditionText("You Won (Please Reset To Play Again)")
          return
    }

    if (compScore===5) {
          alert("Computer Won (Please Reset To Play Again)")
          setConditionText("Computer Won (Please Reset To Play Again)")
          return
    }


    if (
        (playerChoice === 'rock' && compChoice === 'scissor') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissor' && compChoice === 'paper') 
      ) {

          setConditionText(`You Chose ${playerChoice} and Computer Chose ${compChoice}, You Get 1 Point`)
          setPlayerScore(playerScore+1)
      }

      else if (
        (compChoice === 'rock' && playerChoice === 'scissor') ||
        (compChoice === 'paper' && playerChoice === 'rock') ||
        (compChoice === 'scissor' && playerChoice === 'paper') 
      ) {

        setConditionText(`You Chose ${playerChoice} and Computer Chose ${compChoice}, Computer Gets 1 Point`)
        setCompScore(compScore+1)
        
      }

      else {
        setConditionText(`You Chose ${playerChoice}, also Computer Chose ${compChoice}, No one gets the point`)
      }

  }

  function setCompChoice() {
    let index = Math.floor(Math.random() * 3)
    compChoice = choices[index]
    changeScores()
  }

  return (
    <div className="App">

      <div className="scoreTextRow">
        <ScoreText player="Computer" score={compScore} />
        <ScoreText player="You" score={playerScore} />
      </div>
  
      <div className="buttonRow">
        <IconButton onClick={() => {
          playerChoice=choices[0]
          setCompChoice()
        }} icon={<FiOctagon />} text="Rock"  />
        <IconButton onClick={() => {
          playerChoice=choices[1]
          setCompChoice()
        }} icon={<IoNewspaperOutline />} text="Paper"  />
        <IconButton onClick={() => {
          playerChoice=choices[2]
          setCompChoice()
        }} icon={<RiScissorsFill />} text="Scissor"  />
      </div>
      <br />
      <p id="condition" onChange={() => {
        
      }}>
        {conditionText}
      </p>

      <br />

      <button onClick={() => {
        setPlayerScore(0)
        setCompScore(0)
        setConditionText("")
        playerChoice = ""
        compChoice = ""
        alert("Everythig was reset (Click Ok To See The Changes)")
      }}>
        Reset
      </button>
    </div>
  )
}

export default App
