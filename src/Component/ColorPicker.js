import React from 'react';

export default function ColorPicker(props){
    return (
        <div>
            <button onClick={() => props.handleClick('Red')} style={{margin:10}}>Red</button>
            <button onClick={() => props.handleClick('Blue')} style={{margin:10}}>Blue</button>
            <button onClick={() => props.handleClick('Green')} style={{margin:10}}>Green</button>
            <button onClick={() => props.handleClick('Yellow')} style={{margin:10}}>Yellow</button>
            <button onClick={() => props.handleClick('White')} style={{margin:10}}>Delete</button>
            <button>Clear All</button>
        </div>
    )
}
