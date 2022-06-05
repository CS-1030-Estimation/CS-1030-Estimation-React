import React, { Component } from 'react'
// import Select from 'react-select'

export default class Estimate extends Component {
    constructor(){
        super()
        this.state = {
            material: [],
            display: false,
            total: 0,
            brick: 18,
            stone: 23,
            stucco: 13,
            lap: 15,
            panel: 25
        }
    }
    handleEst = (e) => {
        let num = 0
        for (let i = 0; i < e.length; i++){
            if (e[i].text === 'Brick'){
                num = (e[i].sf * this.state.brick) + num
            } else if (e[i].text === 'Stone'){
                num = (e[i].sf * this.state.stone) + num
            } else if (e[i].text === 'Stucco'){
                num = (e[i].sf * this.state.stucco) + num
            } else if (e[i].text === 'Lap'){
                num = (e[i].sf * this.state.lap) + num
            } else if (e[i].text === 'Panel'){
                num = (e[i].sf * this.state.panel) + num
            }
        }
        this.setState({
            display: true,
            total: num
        })
    }
    render = () => {
        return ( 
            <div>
                <button onClick={() => this.handleEst(this.props.material)}>Get Estimate</button>

                {!this.state.display ? <></> :
                <h1>{`Total Price will be $${this.state.total}`}</h1>}
            </div>
        )
    }
}