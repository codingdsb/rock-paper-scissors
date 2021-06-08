import React from 'react'
import './style.css'

const ScoreText = (props) => {
    return (
        <p>{props.player}: {props.score}</p>
    )
}

export default ScoreText
