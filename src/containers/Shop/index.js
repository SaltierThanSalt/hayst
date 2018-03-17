import React from 'react'
import Blender_Sky from '../../img/skyimageblender.jpg'
import Image from '../../Image';
import blender_preview_duh from '../../img/yeah.jpg'

export default function Shop() {
  return (
    <div
      className = "shopmain"
      style={{
        fontStyle: 'italic',
        backgroundColor: 'black'
      }}
    >
      <h1 className = 'wthlol'>
        Visit Our Shop
      </h1>
      <div
        className=".storelinks"
          style={{
              fontsize: '3vw',
            }}>
        <h22>
          <a className="Hello" href = "https://www.mediafire.com/file/16s3llm9ee01cl4/Hayst%20logo.png"
            style={{
              borderTop: '2px solid #ffffff',
              fontStyle: ('Bold'),
              borderBottom: '2px solid #ffffff'
            }}>
              Hayst Professional Logo (0$)
          </a>
        </h22>
      </div> 
      <div
        style={{
        }}>
        <h24>
          No Preview Unavaliable
        </h24>
      </div>
      <div>
        <h23>
          <h25>
            Description: This is a free usable Hayst Logo, Made By HaystStudios.
          </h25>
        </h23>
        <div>
          <div>
            <h22>
              <a
                className="wassaphi"
                href = "http://www.mediafire.com/view/hzdxhyldhhc142t/images%20(1).jpg"
                style={{
                  borderTop: '2px solid #ffffff',
                  fontStyle: ('Bold'),
                  borderBottom: '2px solid #ffffff'
                }}
              >
                Blender Sky Material Image (0$)
              </a>
            </h22>
          </div> 
          <div
            style={{
              borderTop: '2px solid #ffffff',
            }}>
            <h24>
              Preview
            </h24>
          </div>
          <div>
            <h23>
            <Image src={blender_preview_duh} />
            </h23>
            <h26>
              Description: This Is A Sky Material That You Can Use In Blender. (Enviroment)
            </h26>
          </div>
        </div>
        <div>
          <h28
            style={{
              borderTop: '2px solid white',
            }}
          >
          Tutorial By Abriter617:
          </h28>
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0-gA7O6SCdw" frameborder="0" allowfullscreen></iframe> 
        </div> 
        <div>
          <div>
            <h22>
              <a
                className="wassaphi"
                href = "https://www.mediafire.com/file/w4w0wh282bxz6w7/Youtuber%27s%20Improvements%20Package%231%20-%20Hayst.zip"
                style={{
                  borderTop: '2px solid #ffffff',
                  fontStyle: ('Bold'),
                  borderBottom: '2px solid #ffffff'
                }}
              >
                Youtubers Improvement Package (0$)
              </a>
            </h22>
          </div> 
          <div>
            <h24>
              Preview Unavaliable
            </h24>
          </div>
          <div>
            <h26>
              Description: This Is A Special Sound effects/ Meme Images for Youtubers. (improvement)
            </h26>
          </div>
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