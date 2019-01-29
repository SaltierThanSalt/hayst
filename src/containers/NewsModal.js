import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

NewsModal.propTypes = {
  onHide: PropTypes.func.isRequired
};
export default function NewsModal({ onHide }) {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header>
        <h1>Recent Website Update</h1>
      </Modal.Header>
      <Modal.Body>
        <h15>
          Update v = 8 Is Out (The unessecary update that no one really wanted)
          <div>
            <h15 />
          </div>
        </h15>
        <h1> Enjoy your time! :D </h1>
        <div
          style={{
            borderTop: "2px solid #000"
          }}
        >
          <h16>My Recent Video!</h16>
        </div>
        <div>
          <iframe
            title="recentvideotitle"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pmIDx_L4O0A"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div
          className="btn btn-default"
          style={{
            color: "black",
            fontSize: "30px"
          }}
          onClick={onHide}
        >
          Alright! :D
        </div>
      </Modal.Footer>
    </Modal>
  );
}
