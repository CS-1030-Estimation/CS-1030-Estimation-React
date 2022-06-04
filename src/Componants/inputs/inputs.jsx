import React, { Component } from 'react'
import Edits from './../edits/edits'
import Estimate from '../estimate/estimate'
// import Select from 'react-select'

export default class Inputs extends Component {
  constructor(){
    super()
    this.state = {
      key: 1,
      input: '',
      material: [{id:10,text:"Brick"}]
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSumbit = (e) => {
    this.state.material.push({id:this.state.key,text:e})
    this.setState((prevState) => ({
      key: prevState.key + 1,
      input: ''
    }))
  }

  handleEdit = (e , text) => {
    for (let i = 0; i < this.state.material.length; i++) {
      if (this.state.material[i].id === e) {
        this.state.material[i].text = text
      } 
    }
    this.setState({
      input: ''
    })
  }

  handleDelete = (e) => {
    for (let i = 0; i < this.state.material.length; i++) {
      if (this.state.material[i].id === e) {
        this.state.material.splice(i,1)
      }
    }
    this.setState({
      input: ''
    })
  }


  render(){


    let list = this.state.material.map(element => {
      return <Edits
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        key={element.id}
        id={element.id}
        text={element.text} />
    })

    return (
      <div>
        <input value={this.state.input} onChange={(e) => this.handleChange(e, 'input')} type='text'/>
        <button onClick={() => this.handleSumbit(this.state.input)}>Add Items</button>
        {list} 
        {this.state.material.length > 0 &&
          <Estimate material={this.state.material} />
        }
      </div>
    )
  }
}
