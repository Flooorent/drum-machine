import React from 'react'
import './OnOffButton.css'

class OnOffButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            on: true,
        }

        this.switchButton = this.switchButton.bind(this)
    }

    switchButton() {
        this.setState({
            on: !this.state.on
        }, () => {
            this.props.onClick()
        })
    }

    render() {
        const leftColor = this.state.on ? '' : 'blue'
        const rightColor = this.state.on ? 'blue' : ''

        return (
            <div className="on-off-container">
                <div>Power</div>
                <div className="on-off" onClick={this.switchButton}>
                    <div className={`button ${leftColor}`}></div>
                    <div className={`button ${rightColor}`}></div>
                </div>
            </div>
        )
    }
}

export default OnOffButton
