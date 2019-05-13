import React from 'react';
import './App.css';
import DrumpPad from './DrumPad'
import OnOffButton from './OnOffButton'

const padToSrc = {
  'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  'W': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  'E': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  'A': 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  'S': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  'D': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  'Z': 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  'X': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  'C': 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
}

const keyCodeToPad = {
  81: 'Q',
  87: 'W',
  69: 'E',
  65: 'A',
  83: 'S',
  68: 'D',
  90: 'Z',
  88: 'X',
  67: 'C',
}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      audio: '',
      power: true,
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
    const pad = keyCodeToPad[e.keyCodeToPad]

    if(pad) {
      this.playAudio(pad)
    }
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-machine-content">
          <div id="drum-pads-container">

            <div className="drum-row">
              <DrumpPad pad='Q' onClick={() => this.playAudio('Q')} src={padToSrc['Q']} />
              <DrumpPad pad='W' onClick={() => this.playAudio('W')} src={padToSrc['W']} />
              <DrumpPad pad='E' onClick={() => this.playAudio('E')} src={padToSrc['E']} />
            </div>

            <div className="drum-row">
              <DrumpPad pad='A' onClick={() => this.playAudio('A')} src={padToSrc['A']} />
              <DrumpPad pad='S' onClick={() => this.playAudio('S')} src={padToSrc['S']} />
              <DrumpPad pad='D' onClick={() => this.playAudio('D')} src={padToSrc['D']} />
            </div>

            <div className="drum-row">
              <DrumpPad pad='Z' onClick={() => this.playAudio('Z')} src={padToSrc['Z']} />
              <DrumpPad pad='X' onClick={() => this.playAudio('X')} src={padToSrc['X']} />
              <DrumpPad pad='C' onClick={() => this.playAudio('C')} src={padToSrc['C']} />
            </div>

          </div>

          <div id="knobs-container">
            <OnOffButton id="power" />
            <div id="display">{this.state.audio}</div>
            <div id="sound"></div>
            <OnOffButton id="bank" />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
