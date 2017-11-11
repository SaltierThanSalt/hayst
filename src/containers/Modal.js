import React from 'react'
import {Modal} from 'react-bootstrap';

export default function myModal({onHide}) {
    return (
        <Modal
            show
            onHide={onHide}
        >
            <Modal.Header>
                <h4>Recent Website Update</h4>
            </Modal.Header>
            <Modal.Body>
                <h15>Update v 1.1 Is Out! (The Merch Update!)
                    <div>
                        <h15>
                           Buy And Download Goods In The Store Section (Some Are Free, Some Needs Purchase) 
                        </h15>
                    </div>
                </h15>
                <h1> Enjoy your time! :D </h1>
                <div  
                style={{
                    borderTop: '2px solid #000'
                }}
                >
                    <h16>
                        My Recent Video!
                    </h16>
                </div>
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/KelwcKq7Bbg" frameborder="0" allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-default">Got it! :D</div>
            </Modal.Footer>
        </Modal>
    )
} 