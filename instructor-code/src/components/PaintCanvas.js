import React, { Component } from 'react';
import ColorPicker from './ColorPicker'
import Square from './Square'

class PaintCanvas extends Component {
  constructor() {
    super()
    this.state = {
      selectedColor: 'blue',
      isPainting: false
    }

    this.updateSelectedColor = this.updateSelectedColor.bind(this)
  }

  updateSelectedColor(color) {
    this.setState({
      selectedColor: color
    })
  }

  toggleIsPainting() {
    this.setState({
      isPainting: !this.state.isPainting
    })
  }

  draw() {
    let squares = []
    for (let i = 0; i < 4992; i++) {
      squares.push(<Square selectedColor={this.state.selectedColor} isPainting={this.state.isPainting}/>)
    }
    return squares
  }

  render() {
    return (
      <div>
        <ColorPicker 
          handleClick={this.updateSelectedColor}/>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%',
            margin: '0 auto'
          }}
          onMouseDown={() => this.toggleIsPainting()}
          onMouseUp={() => this.toggleIsPainting()}>
          {this.draw()}
        </div>
      </div>
    )
  }
}

export default PaintCanvas