import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="bg-info text-center px-3 rounded-pill"
        >
          {props.pack} Mbps PACKAGE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="bg-success text-center">
          <Card.Body>
            <Card.Header className="bg-info fs-3 text-dark shadow">
              Connection Speed <br /> {props.pack} Mbps
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
                <div className="text-light text-start">
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    Fiber Optics
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    24 Hours Unlimited
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    Live TV Streaming
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    Large FTP server
                  </p>
                </div>
                <div className="text-light text-start">
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    BDIX Connected
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    Buffer less Youtube
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    Buffer less Facebook
                  </p>
                  <p className="m-0 p-0 fs-4">
                    <AiFillCheckCircle className="fs-4 me-2 text-dark" />
                    24/7 Support
                  </p>
                </div>
              </div>
              <p className="mt-3 bg-dark fs-4 text-center text-light rounded-pill">
                {(props.pack === 5 && "500") ||
                  (props.pack === 10 && "800") ||
                  (props.pack === 15 && "1000") ||
                  (props.pack === 20 && "1200")}{" "}
                BDT per Month
              </p>
            </Card.Body>
            <Button
              variant="outline-light"
              className="btn-lg rounded-pill m-0 px-4 py-0"
            >
              <a
                href="tel:+8801624100101"
                className="text-dark fs-5 text-decoration-none"
              >
                For Connection <br />{" "}
                <span className="fw-bold">+880-1624100101</span>
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PackModal({ pack, packModalShow, setPackModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        pack={pack}
        show={packModalShow}
        onHide={() => setPackModalShow(false)}
      />
    </>
  );
}

export default PackModal;
