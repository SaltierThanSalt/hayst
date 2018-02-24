import React from 'react'
import Image from '../../Image';
import art1 from '../../img/yasfatb1.png';
import art2 from '../../img/jinnnnyyyyyy.png';
import art3 from '../../img/yasanoobss.png';

export default function Arts() {
    return (
        <div
          style={{
            backgroundColor: 'black'
          }}>
            <h2 className="titleofartsssss"
              style={{
                  display: 'flex',
                  justifyContent: 'center',
                  borderBottom: 'solid 5px white',
                  color: 'white'
              }}>
              Hayst's Art Section
            </h2>
            <h1 className="Anything"
              style={{
                color: 'white'
              }}>
              Hayst Drawing
            </h1>
            <Image src={art1} />
            Description: Just an art of myself that I drew.
            <h1 className="Anything"
              style={{
                color: 'white'
              }}>
              Max Drawing
            </h1>
            <Image src={art3} />
            Description: Just an art of Max, my best friend in school that I drew.
            <h1 className="Anything"
              style={{
                color: 'white'
              }}>
              Jinny Drawing
            </h1>
            <Image src={art2} />
            Description: Just an art of Jinny, my friend that I drew.
            <div
            style={{
              borderTop:"90px solid black",
              display: 'flex',
              justifyContent: 'center',
              color:'white'
            }}>
            Copyright Hayst 2018
          </div>
          <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                color:'white'
            }}>
            All rights reserved.
          </div>
        </div>
  )
}