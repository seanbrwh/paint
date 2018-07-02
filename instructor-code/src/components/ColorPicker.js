import React from 'react';

export default function ColorPicker(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('green')}>green</button>
      <button onClick={() => props.handleClick('blue')}>blue</button>
      <button onClick={() => props.handleClick('brown')}>brown</button>
      <button onClick={() => props.handleClick('yellow')}>yellow</button>
    </div>
  )
}