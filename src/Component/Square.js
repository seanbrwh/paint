import React, {Component } from 'react';

class Square extends Component {
    constructor(){
        super()
        this.state = {
            background: 'white',
        }
        
    }
    updateColor() {
        let {sColor} = this.props
        if(this.props.isPainting){
            this.setState({
                background: sColor
            })
        }
        
        
    }
    render(){
        return(
            <div 
            style={{
            background:this.state.background,
            border: '1px solid black',
            width: 10,
            height: 10
            }}
            onMouseEnter={() => this.updateColor()}
            ></div>
        )
    }
}

export default Square;