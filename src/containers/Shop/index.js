import React from 'react'
import Blender_Sky from '../../img/skyimageblender.jpg'
import Image from '../../Image';
import blender_preview_duh from '../../img/yeah.jpg'
import haystprofesionallogo from '../../img/Hayst-Logo.png'

export default function Shop() {
  return (
    <div
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
          Preview
        </h24>
      </div>
      <div>
        <h23
          style={{
          }}>
          <Image src={haystprofesionallogo}/>           
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
            <h26
              style={{
              }}>
              Description: This Is A Sky Material That You Can Use In Blender. (Enviroment)
            </h26>
          </div>
        </div>
      </div>  
    </div>
  )
}