import React from 'react'

export default function Video({videoCode}) {
  return (
    <iframe width="1945" height="700" className="VideoStuff" src={`https://www.youtube.com/embed/${videoCode}`} frameborder="0" allowfullscreen></iframe>
  )
}
