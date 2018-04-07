import React from 'react'
import GenerationImage from '../img/anotherbannerwoohoo.png';

export default function Header() {
    return (
        <div
          className="App-header"
          style={{
            backgroundImage: `url(${GenerationImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '150rem',
          }}
        >
            
            <h2 style={{color: '#cc3300'}}>
            </h2>
            <title>TNG</title>
        </div>
    )
}