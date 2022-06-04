import React, { Component } from 'react'
import './App.css';
import Inputs from './Componants/inputs/inputs';
import Header from './Componants/header/header';

export default class App extends Component {
  render = () => {
    return (
      <div>
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
