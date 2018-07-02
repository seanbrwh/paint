import React, {Component } from 'react';
import ColorPicker from './ColorPicker'
import Square from './Square'
//Find a way to clear all
class Canvas extends Component {
    constructor(){
        super();
            this.state = {
                sColor: 'Red',
                isPainting: false
        }
        this.updateSelCol = this.updateSelCol.bind(this)
    }
    updateSelCol(color){
        this.setState({
            sColor: color
        })
    }
    draw(){
        let squares = [];
        for(let i = 0; i < 4000; i++){
            squares.push(<Square sColor={this.state.sColor} isPainting={this.state.isPainting}/>)
        }
        return squares;
    }
    toggleIsPainting(){
        this.setState({
            isPainting: !this.state.isPainting
        })
    }
    render(){
        return (
            <div>
                <ColorPicker
                handleClick={this.updateSelCol} />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '80%',
                    margin: '0 auto'
                }}
                onMouseDown={() => this.toggleIsPainting()}
                onMouseUp={() => this.toggleIsPainting()}
                >
                    {this.draw()}
                </div>
            </div>
        )
    }
}
export default Canvas;