import React, { Component } from 'react';

class Square extends Component {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white'
    }

    this.updateColor = this.updateColor.bind(this)
  }

  updateColor() {
    if (this.props.isPainting) {
      let {selectedColor} = this.props
      this.setState({
        backgroundColor: selectedColor
      })
    }
  }

  render() {
    return (
      <div 
        style={{
          backgroundColor: this.state.backgroundColor,
          border: '1px solid black',
          width: 10,
          height: 10
        }}
        onMouseEnter={this.updateColor}>
      </div>
    )
  }
}

export default Square