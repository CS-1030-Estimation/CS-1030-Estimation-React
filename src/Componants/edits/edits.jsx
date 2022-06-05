import React, { Component } from 'react'
import Select from "react-select"

export default class Edits extends Component {
    state = {
        edit: false,
        input: this.props.text,
        sf: this.props.sf,
        material: [{id:10,text:"Brick",sf:500}],
        select: {
            value: null
        }
    }

    handleEdit = () => {
        this.setState({
            edit: false
        })
        this.props.handleEdit(this.props.id, this.state.input, this.state.sf)
    }

    toggleEdit = () => {
        const options = [
            {value:'Brick',lable:'Brick'},
            {value:'Stone',lable:'Stone'},
            {value:'Stucco',lable:'Stucco'},
            {value:'Lap',lable:'Lap'},
            {value:'Panel',lable:'Panel'}
            ]
            for (let i = 0; i < options.length; i++) {
                if (this.props.text === options[i].lable){
                    this.setState({
                        edit: !this.state.edit,
                        select: {
                            value: options[i],
                            options
                        }
                    })
                }
            }
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
            input: value.lable
        })
    }
    
    handleNumber = (e) => {
        this.setState({
            sf: e.target.value
        })
    }

    render = () => {

        const { select } = this.state;

        return ( 
        <div>
            {!this.state.edit ? <>{this.props.text}</> :
            <div>
                <Select 
                getOptionLabel={(options) => options['lable']}
                options={select.options} 
                value={select.value}
                onChange={this.handleText}
                />
                <input onChange={(e) => this.handleNumber(e)} type='number' min='0' placeholder='Squre Foot' value={this.state.sf}/>
            <button onClick={this.handleEdit}>Submit</button>
            </div>}
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
    </div>
        )
    }
}