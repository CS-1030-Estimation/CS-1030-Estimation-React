import React, { Component } from 'react'
import Edits from './../edits/edits'
import Estimate from '../estimate/estimate'
import Select from "react-select"

export default class Inputs extends Component {
  constructor(){
    super()
    const options = [
      {value:'Brick',lable:'Brick'},
      {value:'Stone',lable:'Stone'},
      {value:'Stucco',lable:'Stucco'},
      {value:'Lap',lable:'Lap'},
      {value:'Panel',lable:'Panel'}
    ]

    this.state = {
      display: false,
      key: 1,
      input: '',
      sf: 0,
      material: [{id:10,text:"Brick",sf:1}],
      select: {
        value: null,
        options
      }
    }
  }

  handleSumbit = (e,el) => {
    this.state.material.push({id:this.state.key,text:e,sf:parseInt(el)})
    this.setState((prevState) => ({
      display: true,
      key: prevState.key + 1,
      input: '',
      sf: 0
    }))
    this.setValue(null)
    console.log('in sub:  ',this.state.display)
  }

  handleEdit = (e , text, sf, bool) => {
    for (let i = 0; i < this.state.material.length; i++) {
      if (this.state.material[i].id === e) {
        this.state.material[i].text = text
        this.state.material[i].sf = parseInt(sf)
      } 
    }
    this.setState({
      display: true,
      input: ''
    })
    console.log('in edit:  ', this.state.display)
  }

  handleDelete = (e) => {
    for (let i = 0; i < this.state.material.length; i++) {
      if (this.state.material[i].id === e) {
        this.state.material.splice(i,1)
      }
    }
    this.setState({
      input: '',
      display: false
    })
  }

  setValue = value => {
    this.setState(prevState => ({
      select: {
        ...prevState.select,
        value
      }
    }))
  }

  handleText = value => {
    this.setValue(value)
    this.setState({
      input: value.lable,
      display: false
    })
  }

  handleNumber = (e) => {
    this.setState({
      sf: e.target.value,
      display: false
    })
  }

  render(){

    const { select } = this.state;

    let list = this.state.material.map(element => {
      return <Edits
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        key={element.id}
        id={element.id}
        text={element.text} 
        sf={element.sf}/>
    })

    return (
      <div>
        <Select 
        getOptionLabel={(options) => options['lable']}
        options={select.options} 
        value={select.value}
        onChange={this.handleText}
        />
        <input onChange={(e) => this.handleNumber(e)} type='number' min='0' placeholder='Squre Foot' value={this.state.sf}/>
        <button onClick={() => this.handleSumbit(this.state.input, this.state.sf)}>Add Items</button>
        {list} 
        {this.state.material.length > 0 && 
          <Estimate material={this.state.material} />
        }
      </div>
    )
  }
}
