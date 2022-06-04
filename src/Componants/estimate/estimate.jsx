import React, { Component } from 'react'
// import Select from 'react-select'

export default class Estimate extends Component {
    constructor(){
        super()
        this.state = {
            material: [],
            display: false
        }
    }
    handleEst = (e) => {
        console.log('inside est: ', e)
        this.setState({
            display: true
        })
    }
    render = () => {
        return ( 
            <div>
                <button onClick={() => this.handleEst(this.props.material)}>Get Estimate</button>

                {!this.state.display ? <></> :
                <h1>Display</h1>}
            </div>
        )
    }
}