import React, { Component } from 'react'
import cloudy from '../images/iconfinder_Cloudy_3553106.svg'

export class Main extends Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <img src={cloudy} alt="cloudy"/>
      </div>
    )
  }
}

export default Main
