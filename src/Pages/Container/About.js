import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import about from "../../images/about.png";
import owner from "../../images/owner.jpg";
import {
  FaQuoteRight,
  FaSatelliteDish,
  FaSortAmountUpAlt,
  FaThumbsUp,
} from "react-icons/fa";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <Image src={about} alt="" fluid />
        </div>
        <h1 className="text-center fw-normal text-dark display-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
          ABOUT US
        </h1>
        <FaQuoteRight className="display-4 text-info mt-4" />
        <h5 className="fw-light fs-2 text-center">
          Welcome to the era of MUSHFIKA NET in Bangladesh..
        </h5>
        <div className="bg-primary d-flex flex-column flex-lg-row justify-content-center align-items-center my-5 p-4">
          <div className="d-flex flex-column justify-content-center align-items-center mx-3">
            <Image
              src={owner}
              width={200}
              height={200}
              alt=""
              className="rounded-pill"
            />
            <h3 className="fw-light text-light text-nowrap mt-2">
              Shamol Chowdhury
            </h3>
            <p>(Owner of MUSHFIKA NET)</p>
          </div>
          <p className="text-light fs-5 lh-base text-center">
            Shyamal Chowdhury has started MUSHFIKA NET to bring high speed
            internet to every person's home. As Internet Service Provider,
            MUSHFIKA NET is a renowned company in Bangladesh. Providing super
            fast and reliable internet connectivity to our clients is our prime
            concern. We take professional approaches to deliver high speed
            broadband internet connectivity through cutting edge technology. We
            are focusing to satisfy our clients through our professionalism at
            minimum cost as comparison with others ISP.
          </p>
        </div>
        <div className="container mt-5">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="shadow text-center">
                <FaSatelliteDish className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Cutting Edge Technology</Card.Title>
                  <Card.Text>
                    To Ensure secure and fast data connectivity we always choose
                    high quality tools with reliable infrastructures for better
                    performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaSortAmountUpAlt className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>High Performance at Low Cost</Card.Title>
                  <Card.Text>
                    We are providing high speed data connectivity in rigorous
                    and most effective way at reasonable price at you door.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaThumbsUp className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Reliable Customer Services</Card.Title>
                  <Card.Text>
                    We are dedicated not only to establish date connectivity but
                    also to ensure 24/7 support to our clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
