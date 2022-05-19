import React, { useState } from "react";
import { Button, Form, Image, Nav, Navbar } from "react-bootstrap";
//import contact from "../../images/contact.png";
//import bkash from "../../images/bkash.png";
import {
  FaQuoteRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import CashModal from "../Modals/CashModal";

function Contact() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <Image src="https://i.ibb.co/7nt0sYQ/contact.png" alt="" fluid />
        </div>
        <h1 className="text-center fw-normal text-dark display-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
          CONTACT US
        </h1>
        <FaQuoteRight className="display-4 text-info mt-4" />
        <h5 className="fw-light fs-2 text-center">
          We are dedicated to provide support to our clients.
        </h5>
        <div className="bg-primary w-100 mt-5 mb-2 p-4">
          <p className="px-2 text-light fs-1 lh-base text-center">
            We are ready to support our clients 24/7.
          </p>
        </div>
        <div className="container my-5 d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
          <div>
            <p className="fs-3 fw-light bg-info text-center rounded-pill px-2 my-4 shadow">
              Send Your Message To Us...
            </p>
            <Form className="text-center">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your mobile number with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Share Your Opinion</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="px-4 shadow">
                Send Message
              </Button>
            </Form>
          </div>
          <div className="">
            <p className="fs-3 fw-light bg-info text-center rounded-pill px-2 mt-5 shadow">
              Our Contact Info...
            </p>
            <Nav className="flex-column align-items-center">
              <BsGeoAlt className="display-4" />
              <div className="fs-6 text-dark mt-2">
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
            <Nav className="flex-column align-items-center text-center">
              <BiSupport className="display-4" />
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
                className="d-flex flex-column flex-lg-row justify-content-center
                align-items-center bg-dark btn btn-light rounded-pill px-3 pt-1
                mb-3"
              >
                <Image
                  src="https://i.ibb.co/19L7CsW/bkash.png"
                  width={120}
                  height={60}
                  alt="bkash"
                />
                <p className="bg-light text-dark fs-2 rounded-pill my-auto px-2">
                  01841900501
                </p>
              </Navbar.Text>
            </Nav>
            <Nav className="flex-column align-items-center">
              <IoShareSocialSharp className="display-4" />
              <Nav className="border border-1 rounded-pill p-2">
                <Nav.Link
                  href="/home"
                  className="text-white fs-3 m-0 p-0"
                  title="Facebook"
                >
                  <FaFacebook className="btn-outline-info rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-3 m-0 p-0"
                  title="Twitter"
                >
                  <FaTwitter className="btn-outline-info rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-3 m-0 p-0"
                  title="Instagram"
                >
                  <FaInstagram className="btn-outline-info rounded mx-2" />
                </Nav.Link>
              </Nav>
            </Nav>
          </div>
        </div>
        <div className="my-3">
          <div className="bg-info w-100 rounded-pill shadow">
            <p className="fs-3 fw-light text-center px-5 my-4">
              &nbsp;&nbsp;&nbsp;Our Office Location On Google
              Map&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4183412879925!2d90.36185171498235!3d23.8037185845632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17e770e95fb%3A0xe3e2abba285372db!2sMushfika%20Net!5e0!3m2!1sen!2sbd!4v1652868749768!5m2!1sen!2sbd"
            width="100%"
            height="500"
            title="71-borobag, mirpur-2, dhaka-1216"
            style={{ border: "0", display: "block", boxSizing: "border-box" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
      <CashModal modalShow={modalShow} setModalShow={setModalShow} />
    </>
  );
}

export default Contact;
