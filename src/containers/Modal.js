import React from 'react'
import {Modal} from 'react-bootstrap';

export default function myModal({onHide}) {
    return (
        <Modal
            show
            onHide={onHide}
        >
            <Modal.Header>
                <h4>Recent Channel Update!</h4>
            </Modal.Header>
            <Modal.Body>
                <h15>The New Video Project: 'Minecraft "Max=Newb" [Hypixel Bedwars] /w Max Comics' Is Being Made!</h15>
                <h1> Hayst Is Still Working On It, please be patient! :D </h1>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/QlIWtKEaBkA" frameborder="0" allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-default">Got it! :D</div>
            </Modal.Footer>
        </Modal>
    )
} 