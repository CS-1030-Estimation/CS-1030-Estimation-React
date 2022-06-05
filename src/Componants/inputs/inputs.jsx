import React, { Component } from 'react'
import Edits from './../edits/edits'
import Estimate from '../estimate/estimate'
import Select from "react-select"
import './inputs.css'

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
      material: [],
      select: {
        value: null,
        options
      }
    }
  }

  handleSumbit = (e,el) => {
    if (e === ''){
      this.state.material.push({id:this.state.key,text:'Error',sf:parseInt(el)})
      this.setState((prevState) => ({
        display: true,
        key: prevState.key + 1,
        input: '',
        sf: 0
      }))
      this.setValue(null)
    } else {
      this.state.material.push({id:this.state.key,text:e,sf:parseInt(el)})
      this.setState((prevState) => ({
        display: true,
        key: prevState.key + 1,
        input: '',
        sf: 0
      }))
      this.setValue(null)
    }
  }

  handleEdit = (e , text, sf, bool) => {
    for (let i = 0; i < this.state.material.length; i++) {
      if (this.state.material[i].id === e) {
        this.state.material[i].text = text
        this.state.material[i].sf = parseInt(sf)
      } 
    }
    this.setState({
      display: bool,
      input: ''
    })
    console.log(this.state.display)
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
      <div className='inputs'>
        <div className='cladding-input'>
          <p>Input exterior cladding</p>
          <Select getOptionLabel={(options) => options['lable']} options={select.options} value={select.value} onChange={this.handleText}/>
        </div>
        <div className='sf-input'>
        <p>Input exterior cladding</p>
          <input onChange={(e) => this.handleNumber(e)} type='number' min='0' placeholder='Squre Foot' value={this.state.sf}/>
        </div>
        <div className='add-item'>
          <button onClick={() => this.handleSumbit(this.state.input, this.state.sf)}>Add Items</button>
        </div>
        <div className='item-list'>
          {list} 
        </div>
        <div className='display-total'>
          {this.state.material.length > 0 && 
            <Estimate material={this.state.material} />
          }
        </div>
      </div>
    )
  }
}
