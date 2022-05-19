import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import bPay from "../../images/bPay.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          bKash Payment System
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={bPay} width="100%" height="100%" alt="bKash Payment" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CashModal({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CashModal;
