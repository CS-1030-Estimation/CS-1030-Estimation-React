import React, { Component } from 'react'
import Inputs from './Inputs'
import axios from 'axios'
import Select from 'react-select'

export default class Estimate extends Component {

  state = {
    material: [],
    input: ''
  }

  componentDidMount() {
    axios.get('/api/Inputs').then(res => {
      this.setState({
        material: res.data
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSumbit = () => {
    axios.post('./api/Inputs', {text: this.state.input}).then(res => {
      this.setState({
        material: res.date,
        text: ''
      })
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/Inputs/${id}`).then(res => {
      this.setState({
        material: res.date
      })
    })
  }


  render(){

    let list = this.state.material.map(element => {
      return <Inputs
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        key={element.id}
        id={element.id}
        text={element.text} />
    })

    return (
      <div>
        {console.log(list)}
        {list}
        <input value={this.state.text} onChange={(e) => this.handleChange(e)} type='text'/>
        <button onClick={this.handleSumbit}>Add Items</button>
      </div>
    )
  }
}
