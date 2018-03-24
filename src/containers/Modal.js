import React from 'react'
import {Modal} from 'react-bootstrap';

export default function myModal({onHide}) {
    return (
        <Modal
            show
            onHide={onHide}
        >
            <Modal.Header>
                <h1>Recent Website Update</h1>
            </Modal.Header>
            <Modal.Body>
                <h15>Update v 5.5 Is Out! (Better GUI)
                    <div>
                        <h15>
                           Now there are cleaner GUIs.
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/d8rIVjIa9E4" frameborder="0" allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-default">Alright! :D</div>
            </Modal.Footer>
        </Modal>
    )
} 