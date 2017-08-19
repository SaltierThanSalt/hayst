import React from 'react'
import GenerationImage from '../img/lolol.png';
import svgimg from '../img/mincraft_axe1600.png';

export default function Header() {
    return (
        <div
          className="App-header"
          style={{
            backgroundImage: `url(${GenerationImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        >
            <div>
                <img src={svgimg} className="App-logo" alt="logo"/>
            </div>
            <h2 style={{color: '#cc3300'}}>
            </h2>
            <title>TNG</title>
        </div>
    )
}