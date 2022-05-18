import React, { useState } from "react";
import { Button, Container, Image, Modal, Nav, Navbar } from "react-bootstrap";
//import logo from "../../images/logo.png";
//import bkash from "../../images/bkash.png";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import {
  FaQuoteRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaServer,
  FaChevronCircleUp,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Image
          src="https://i.ibb.co/19L7CsW/bkash.png"
          width={100}
          height={50}
          alt="bkash"
          className="bg-dark"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mt-5 py-3">
        <Container className="flex-column flex-lg-row">
          <Nav className="d-flex flex-column align-items-center my-3">
            <Navbar.Brand href="/home" className="mx-auto">
              <NavLink to={"/home"}>
                <Image
                  src="https://i.ibb.co/2krBM9J/logo.png"
                  width="300px"
                  alt="logo"
                  fluid
                />
              </NavLink>
            </Navbar.Brand>
            <div className="my-2 text-info fs-5">
              <FaQuoteRight className="fs-3 text-white" />
              &nbsp; We Connect... &nbsp;
            </div>
          </Nav>
          <Nav className="d-flex flex-column mb-3">
            <Nav className="flex-column align-items-center mt-3">
              <h4 className="text-info fs-5 text-decoration-underline">
                Contact Info
              </h4>
              <div className="fs-6 text-white mt-2">
                <p className="mb-0">
                  <BsGeoAlt />
                  &nbsp;&nbsp;71 Borobag, Mirpur 2, Dhaka 1216
                </p>
                <p className="mb-0">
                  <BsEnvelope />
                  &nbsp;&nbsp;Email: netmushfika.bd@gmail.com
                </p>
                <p>
                  <BsTelephone />
                  &nbsp;&nbsp;Phone: 01624100101, 0258053424
                </p>
              </div>
            </Nav>
            <Nav className="flex-column align-items-center">
              <h4 className="text-info fs-5 text-decoration-underline">
                Follow Us
              </h4>
              <Nav>
                <Nav.Link
                  href="https://www.facebook.com/musfika.net"
                  className="text-white fs-4 m-0 p-0"
                  title="Facebook"
                >
                  <FaFacebook className="btn-outline-light rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-4 m-0 p-0"
                  title="Twitter"
                >
                  <FaTwitter className="btn-outline-light rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-4 m-0 p-0"
                  title="Instagram"
                >
                  <FaInstagram className="btn-outline-light rounded mx-2" />
                </Nav.Link>
              </Nav>
            </Nav>
          </Nav>
          <Nav className="d-flex flex-column">
            <Nav className="flex-column text-center">
              <h4 className="text-info fs-5 text-decoration-underline">
                Popular Packages
              </h4>
              <Link
                to="/normal"
                className="m-0 px-1 btn-outline-light rounded-pill text-decoration-none"
              >
                Basic Package - 5 Mbps
              </Link>
              <Link
                to="/normal"
                className="m-0 px-1 btn-outline-light rounded-pill text-decoration-none"
              >
                Classic Package - 10 Mbps
              </Link>
              <Link
                to="/normal"
                className="m-0 px-1 btn-outline-light rounded-pill text-decoration-none"
              >
                Classic Package - 15 Mbps
              </Link>
              <Link
                to="/normal"
                className="m-0 px-1 btn-outline-light rounded-pill text-decoration-none"
              >
                Jumbo Package - 20 Mbps
              </Link>
            </Nav>
            <Nav className="justify-content-center align-items-center mt-3">
              <h4 className="text-light fs-5">our FTP server</h4>
              <Nav>
                <Nav.Link
                  href="http://10.16.100.244"
                  className="text-white m-0 p-0"
                  title="FTP server"
                >
                  <FaServer className="fs-1 btn-outline-info rounded mx-2 p-1" />
                </Nav.Link>
              </Nav>
            </Nav>
          </Nav>
          <Nav className="flex-column text-center">
            <h4 className="text-info fs-5 text-decoration-underline mt-2">
              For Support
            </h4>
            <Navbar.Text>
              <a
                className="text-dark btn-info rounded-pill px-2 py-1 text-decoration-none"
                href="tel:+8801624100101"
              >
                <BiSupport className="fs-4" /> +880-1624100101
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a
                className="text-dark btn-info rounded-pill px-2 py-1 text-decoration-none"
                href="tel:+880258053424"
              >
                <BiSupport className="fs-4" /> +880-258053424
              </a>
            </Navbar.Text>
            <Navbar.Text
              onClick={() => setModalShow(true)}
              className="d-flex flex-column flex-lg-row justify-content-center align-items-center btn btn-dark border rounded-pill px-2 py-0 my-2"
            >
              <Image
                src="https://i.ibb.co/19L7CsW/bkash.png"
                width={100}
                height={50}
                alt="bkash"
              />
              <p className="bg-light text-dark rounded-pill my-auto px-2 py-1">
                01841900501
              </p>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light">
        <Navbar.Text className="mx-auto">
          &copy; 2022, <NavLink to={"/home"}>Musfika Net</NavLink>. All Rights
          Reserved.
        </Navbar.Text>
        <a href="#">
          <FaChevronCircleUp className="fs-2 me-2 p-0 rounded-pill shadow" />
        </a>
      </Navbar>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Footer;
