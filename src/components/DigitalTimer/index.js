import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="content-container">
          <div className="time-container">
            <div className="time-card">
              <h1 className="time">
                25:00
                <br />
                <span className="status">Running</span>
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="operate-container">
              <div className="start-button-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="start-image"
                />
                <p>Start</p>
              </div>
              <div className="start-button-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="start-image"
                />
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="set-timer-container">
              <button type="button" className="decrease-btn">
                -
              </button>
              <p className="set-time">25</p>
              <button type="button" className="increase-btn">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
