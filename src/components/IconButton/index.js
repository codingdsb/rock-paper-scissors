import React from 'react'
import './style.css'

const IconButton = (props) => {
    return (
        <button onClick={props.onClick} className="iconbtn">
            <span id="icon">{props.icon}</span>
            <br />
            <h3>{props.text}</h3>
        </button>
    )
}

export default IconButton
