import React, { Component } from 'react'
// import Main from './components/Main'
import cloudy from './images/iconfinder_Cloudy_3553106.svg'

class App extends Component {
  render() {
    return (
      <div className="mmr-main">
        {/* <Main /> */}
        <div className="mmr-main__top">
          <div className="mmr-top">
            <div className="mmr-weather">
              <img src={cloudy} alt="cloudy"/>
            </div>

            <div className="mmr-clock">
              <h1>3:00pm</h1>
              <p>Thursday</p>
              <p>November 27th, 2019</p>
            </div>
          </div>
        </div>
        <div className="mmr-main__base">
          Display
        </div>
        <div className="mmr-main__bottom">
          Bottom
        </div>
      </div>
    )
  }
}

export default App
