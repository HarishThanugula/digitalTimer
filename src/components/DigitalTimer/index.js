import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timeInSeconds: 1500,
    isStart: true,
  }

  onStartButtonClicked = () => {
    this.timerId = setInterval(this.decreaseTime, 1000)

    this.setState({isStart: false})
  }

  pauseButtonClicked = () => {
    clearInterval(this.timerId)

    this.setState({isStart: true})
  }

  decreaseTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds - 1,
    }))
  }

  getMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  increaseSetTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 60}))
  }

  decreaseSetTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds - 60}))
  }

  setTimerMinutes = () => {
    const {timeInSeconds} = this.state
    const setTime = Math.floor(timeInSeconds / 60)
    if (setTime < 10) {
      return `0${setTime}`
    }
    return setTime
  }

  render() {
    const {isStart} = this.state
    const initialTime = `${this.getMinutes()}:${this.getSeconds()}`
    const setTimerLimit = `${this.setTimerMinutes()}`

    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="content-container">
          <div className="time-container">
            <div className="time-card">
              <h1 className="time">{initialTime}</h1>
              <br />
              {isStart ? (
                <p className="status">Paused</p>
              ) : (
                <p className="status">Running</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="operate-container">
              <div className="start-button-card">
                {isStart ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="start-image"
                    onClick={this.onStartButtonClicked}
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
                    alt="pause icon"
                    className="start-image"
                    onClick={this.pauseButtonClicked}
                  />
                )}
                {isStart ? (
                  <button type="button">Start</button>
                ) : (
                  <button type="button">Pause</button>
                )}
              </div>
              <div className="start-button-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="start-image"
                  onClick={this.resetTheTime}
                />
                <button type="button">Reset</button>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="set-timer-container">
              <button
                type="button"
                className="decrease-btn"
                onClick={this.decreaseSetTime}
              >
                -
              </button>
              <p className="set-time">{setTimerLimit}</p>
              <button
                type="button"
                className="increase-btn"
                onClick={this.increaseSetTime}
              >
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
