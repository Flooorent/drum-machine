import React from 'react'
import './DrumPad.css'

function DrumpPad(props) {
    const id = props.pad

    return (
        <div className="drum-pad" id={`${id}-pad`} onClick={props.onClick}>
            <div className="bold">{id}</div>
            <audio id={id} className="clip" src={props.src}></audio>
        </div>
    )
}

export default DrumpPad
