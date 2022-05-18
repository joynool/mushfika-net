import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { BsTelephone, BsPhone } from "react-icons/bs";
//import bkash from "../../images/bkash.png";
import {
  FaQuoteRight,
  FaNetworkWired,
  FaServer,
  FaSpinner,
  FaHeadset,
} from "react-icons/fa";

function Why({ setModalShow }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="pt-5 text-center display-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
        MUSFIKA NET
      </h1>
      <h5 className="fw-base mt-3 text-center">
        Ensuring Super Fast and Reliable Internet Connectivity...
      </h5>
      <div className="my-4 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <a
          className="fs-3 text-primary btn-outline-light ms-3 px-2 py-1 text-decoration-none"
          href="tel:+8801624100101"
        >
          <BsTelephone className="fs-3" /> +880-1624100101
        </a>
        <a
          className="fs-3 text-primary btn-outline-light ms-3 px-2 py-1 text-decoration-none"
          href="tel:+880258053424"
        >
          <BsPhone className="fs-3" /> +880-258053424
        </a>
      </div>
      <p className="fs-3 fw-light">We accept bKash Payment</p>
      <div
        onClick={() => setModalShow(true)}
        className="d-flex flex-column flex-lg-row justify-content-center align-items-center bg-dark btn btn-light rounded-pill px-3 pt-1 mb-3"
      >
        <Image
          src="https://i.ibb.co/19L7CsW/bkash.png"
          width={150}
          height={80}
          alt="bkash"
        />
        <p className="bg-light text-dark fs-2 rounded-pill my-auto px-2 py-1">
          01841900501
        </p>
      </div>
      <div className="bg-primary my-4 p-4">
        <p className="text-light fs-5 py-3 lh-base text-center">
          MUSFIKA NET is a renounce company in Bangladesh as Internet Service
          Provider (ISP). We are dedicated to ensure high performance and secure
          Internet Connectivity to our customer with our compromising the
          quality of services. Our aim is to spread out Super Fast Broadband
          Internet Connectivity in Bangladesh at minimum cost.
        </p>
      </div>
      <div className="container">
        <div className="text-center mt-4 mb-4">
          <h1 className="py-5 display-5 text-decoration-underline">
            <FaQuoteRight className="text-info me-2" />
            Why Musfika Net
          </h1>
        </div>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="shadow text-center">
              <FaNetworkWired className="text-primary display-1 mx-auto mt-3" />
              <Card.Body>
                <Card.Title>Super Fast Internet</Card.Title>
                <Card.Text>
                  We provide high quality fast internet connectivity at low
                  price in comparison with other ISPs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow text-center">
              <FaServer className="text-primary display-1 mx-auto mt-3" />
              <Card.Body>
                <Card.Title>Live TV & FTP Server</Card.Title>
                <Card.Text>
                  Besides Live TV channel, we have huge collection on our FTP
                  server that you will love for sure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow text-center">
              <FaSpinner className="text-primary display-1 mx-auto mt-3" />
              <Card.Body>
                <Card.Title>Buffer less Streaming</Card.Title>
                <Card.Text>
                  Experience buffer less streaming services for most popular
                  websites like Youtube and Facebook
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow text-center">
              <FaHeadset className="text-primary display-1 mx-auto mt-3" />
              <Card.Body>
                <Card.Title>Customer Support 24/7</Card.Title>
                <Card.Text>
                  To meet our customer satisfaction we are always available,
                  just contact with us to solve your problem.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Why;
