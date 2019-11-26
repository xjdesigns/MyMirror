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
          <div className="mmr-bottom">
            <div className="mmr-movie">
              <div class="spx-media">
                <div className="spx-media__element">
                  <img src="http://image.tmdb.org/t/p/original/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg" alt="Fight Club" />
                </div>
                <div className="spx-media__body">
                  <h2>Angel Has Fallen</h2>
                  <p>After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.</p>
                  <p>Vote Avg. 5.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
