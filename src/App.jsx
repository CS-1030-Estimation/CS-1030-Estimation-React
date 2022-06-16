import React, { Component } from 'react'
import './App.css';
import Inputs from './Components/inputs/inputs'
import Header from './Components/header/header'

export default class App extends Component {
  render = () => {
    return (
      <div className='wrap'>
        <div className='header'>
          <Header />
        </div>
        <div className='view'>
          <div className='input'>
            <Inputs />
          </div>
        </div>
      </div>
    )
  }
}
