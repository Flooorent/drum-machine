import React from 'react'

/*
function DrumpPad(props) {
    return (
        <div className="drum-pad" id="Q-pad" onClick={() => this.playAudio("Q")}>
            <div>Q</div>
            <audio id="Q" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>
        </div>
    )
}
*/

function DrumpPad(props) {
    const id = props.pad

    return (
        <div className="drum-pad" id={`${id}-pad`} onClick={props.onClick}>
            <div>{id}</div>
            <audio id={id} className="clip" src={props.src}></audio>
        </div>
    )
}

export default DrumpPad
