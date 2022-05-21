import React, { Component } from 'react'
import './App.css';
import Estimate from './Componants/Estimate';
import axios from 'axios'

export default class App extends Component {
  render = () => {
    return (
      <Estimate />
    )
  }
}
