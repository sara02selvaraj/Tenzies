import React from 'react'

export default function Dice(props) {
    return (
            <div onClick={() => props.handleClick(props.id)} 
            className={`dice-face ${props.isHeld? "accent" : ""}`}>
                <h2>{props.value}</h2>
            </div>
    )
}