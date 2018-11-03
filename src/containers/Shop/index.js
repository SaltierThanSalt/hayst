import React from 'react'
import Image from '../../components/Image';
import blender_preview_duh from '../../img/yeah.jpg'

export default function Shop() {
  return (
    <div
      className = "shopmain"
      style={{
        fontStyle: 'italic',
        backgroundColor: 'black',
        marginBottom: "2rem",
      }}
    >
        <div>
          <h1>
            Shop down till next update.
          </h1>
        </div>
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