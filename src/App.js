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
      volume: '50',
      display: ''
    }
    
    this.playAudio = this.playAudio.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSlide = this.handleSlide.bind(this)
    this.handlePowerClick = this.handlePowerClick.bind(this)
  }

  componentWillMount() {
    document.body.style.margin = 0
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }
  
  playAudio(id) {
    if(this.state.power) {
      const elem = document.getElementById(id)
      const padElem = document.getElementById(`${id}-pad`)
      const currentBackgroundColor = getComputedStyle(padElem).backgroundColor

      padElem.style.backgroundColor = "rgb(255, 165, 0)"

      setTimeout(
        () => {
          padElem.style.backgroundColor = currentBackgroundColor
        }, 100)

      elem.play()
      
      this.setState({
        audio: id,
        display: id,
      })
    }
  }
  
  handleKeyDown(e) {
    const pad = keyCodeToPad[e.keyCodeToPad]

    if(this.state.power && pad) {
      this.playAudio(pad)
    }
  }

  handleSlide(e) {
    if(this.state.power) {
      const newVolume = e.target.value

      this.setState({
        volume: newVolume,
        display: `Volume: ${newVolume}`,
      }, () => {
        setTimeout(() => {
          this.setState({
            display: ''
          })
        }, 1000)
      })
    }
  }

  handlePowerClick() {
    const newPower = !this.state.power
    const newDisplay = newPower ? this.state.display : ''

    this.setState({
      power: newPower,
      display: newDisplay
    })
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
            <OnOffButton id="power" label="Power" onClick={this.handlePowerClick}/>
            <div id="display">
              <p>{this.state.display}</p>
            </div>
            <div className="slide-container">
              <input type="range" min="1" max="100" value={this.state.volume} step="1" className="slider" onChange={this.handleSlide}></input>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
