import React from 'react'
import {Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";

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
                <h15>Update v = 8 Is Out! (THE NEWS UPDATE!)
                    <div>
                        <h15>
                           Look for some interesting news in the new News tab! It comes up with new news everytime something interesting happens that are related to my Youtube channel.</h15>
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
                  <iframe title="updatevideo" width="560" height="315" src="https://www.youtube.com/embed/2BUttFuNmqE" frameborder="0" allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-default">
                <Link
            style={{
              color: "black",
              fontSize: "30px"
            }}
            to="/"
          >
          Alright! :D
          </Link>
          </div>
            </Modal.Footer>
        </Modal>
    )
} 