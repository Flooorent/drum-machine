import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      audio: ''
    }
    
    this.playAudio = this.playAudio.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }
  
  playAudio(id) {
    const elem = document.getElementById(id)
    elem.play()
    
    this.setState({
      audio: id
    })
  }
  
  handleKeyDown(e) {
    switch(e.keyCode) {
      case 81:
        this.playAudio("Q")
        break
      case 87:
        this.playAudio("W")
        break
      case 69:
        this.playAudio("E")
        break
      case 65:
        this.playAudio('A')
        break
      case 83:
        this.playAudio('S')
        break
      case 68:
        this.playAudio('D')
        break
      case 90:
        this.playAudio('Z')
        break
      case 88:
        this.playAudio('X')
        break
      case 67:
        this.playAudio('C')
        break
      default:
        break
    }
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-machine-content">
          <div id="drum-pads-container">
            <div className="drum-row">
              <div className="drum-pad" id="Q-pad" onClick={() => this.playAudio("Q")}>
                <div>Q</div>
                <audio id="Q" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>
              </div>
              <div className="drum-pad" id="W-pad" onClick={() => this.playAudio("W")}>
                <p>W</p>
                <audio id="W" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'></audio>
              </div>
              <div className="drum-pad" id="E-pad" onClick={() => this.playAudio("E")}>
                <p>E</p>
                <audio id="E" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'></audio>
              </div>
            </div>
            <div className="drum-row">
              <div className="drum-pad" id="A-pad" onClick={() => this.playAudio("A")}>
                <p>A</p>
                <audio id="A" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'></audio>
              </div>
              <div className="drum-pad" id="S-pad" onClick={() => this.playAudio("S")}>
                <p>S</p>
                <audio id="S" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'></audio>
              </div>
              <div className="drum-pad" id="D-pad" onClick={() => this.playAudio("D")}>
                <p>D</p>
                <audio id="D" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'></audio>
              </div>
            </div>
            <div className="drum-row">
              <div className="drum-pad" id="Z-pad" onClick={() => this.playAudio("Z")}>
                <p>Z</p>
                <audio id="Z" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'></audio>
              </div>
              <div className="drum-pad" id="X-pad" onClick={() => this.playAudio("X")}>
                <p>X</p>
                <audio id="X" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'></audio>
              </div>
              <div className="drum-pad" id="C-pad" onClick={() => this.playAudio("C")}>
                <p>C</p>
                <audio id="C" className="clip" src='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'></audio>
              </div>
            </div>
          </div>
          <div id="knobs-container">
            <div id="display">{this.state.audio}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
