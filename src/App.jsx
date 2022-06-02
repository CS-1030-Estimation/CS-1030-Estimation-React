import React, { Component } from 'react'
import './App.css';
import Estimate from './Componants/Estimate';
import Header from './Componants/Header';
import Inputs from './Componants/Inputs';
import axios from 'axios'

export default class App extends Component {



  render = () => {
    return (
      <div className='view'>
        <Header />
        <Estimate />
        <Inputs />
      </div>
    )
  }
}
