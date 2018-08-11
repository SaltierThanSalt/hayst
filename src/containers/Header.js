import React from 'react'
import GenerationImage from '../img/haystbanner.png';

export default function Header() {
    return (
        <div
          className="App-header"
          style={{
            backgroundImage: `url(${GenerationImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '110rem',
          }}
        >
            
            <h2 style={{color: '#cc3300'}}>
            </h2>
            <title>TNG</title>
        </div>
    )
}