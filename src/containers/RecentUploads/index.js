import React from 'react'

export default function RecentUploads() {
  return (
      <div>
        <h14>
          Recent Uploads
        </h14>
          <div  
            style={{
                borderTop: '2px solid #000'
            }}
            >
            <h16>
              Minecraft: "OP??" [Hypixel Bedwars]  
            </h16>
          </div>
        <div
          style={{
              borderTop: '2px solid #000'
          }}
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QlIWtKEaBkA" frameborder="0" allowfullscreen></iframe>
          </div>
          
        <div
          style={{
              borderTop: '2px solid #000'
          }}
          >
            <h16>
              Hayst plays faded with a launchpad in front of class
            </h16>
          </div>
        <div
          style={{
             borderTop: '2px solid #000'
          }}
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kTbjDJJq6Hs" frameborder="0" allowfullscreen></iframe> 
          </div>
          <div
            style={{
              borderTop:'2px solid #000'
            }}
            >
            <h16>
              subscribe for more contents like these
            </h16>
          </div>
        <h20>
        <a href= "https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"> <img src="data:image/png;base64,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"/></a>
        </h20>
    </div>
    
  )
}