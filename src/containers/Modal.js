<<<<<<< HEAD
import React from 'react'
import {Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
=======
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
>>>>>>> abf9db3652c9633f8614ebb9977082c5408ac4f7

export default function myModal({ onHide }) {
  return (
    <Modal show onHide={onHide}>
      <Modal.Header>
        <h1>Recent Website Update</h1>
      </Modal.Header>
      <Modal.Body>
        <h15>
          Update v = 7 Is Out! (THE SECOND UI UPDATE!)
          <div>
            <h15>
              Now, you can chat with you friends. Write things like: "Hello!
              Nice To Meet You! - (yourname), also, the UI changed to something
              more preferable!
            </h15>
          </div>
        </h15>
        <h1> Enjoy your time! :D </h1>
        <div
          style={{
            borderTop: '2px solid #000'
          }}
        >
<<<<<<< HEAD
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
=======
          <h16>My Recent Video!</h16>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2BUttFuNmqE"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="btn btn-default">
          <Link
>>>>>>> abf9db3652c9633f8614ebb9977082c5408ac4f7
            style={{
              color: 'black',
              fontSize: '30px'
            }}
            to="/"
          >
            Alright! :D
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
