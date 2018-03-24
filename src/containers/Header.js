import React from 'react'
import GenerationImage from '../img/anotherbannerwoohoo.png';
import svgimg from '../img/reallprofilepicyayxddddddd.png';

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
            <div>
                <img src={svgimg} className="App-logo" alt="logo"/>
            </div>
            <h2 style={{color: '#cc3300'}}>
            </h2>
            <title>TNG</title>
        </div>
    )
}