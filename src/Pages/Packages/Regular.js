import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import pack from "../../images/pack.png";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { netPack } from "../../data";
import { FaQuoteRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

function Regular() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <Image src={pack} alt="" fluid />
        </div>
        <h1 className="text-center fw-normal text-dark display-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
          OUR PACKAGES
        </h1>
        <FaQuoteRight className="display-4 text-info mt-4" />
        <h5 className="fw-light fs-2 text-center">
          Let's introduce to our Broadband Internet Connectivity - Normal
          Packages
        </h5>
        <div className="bg-primary w-100 mt-5 mb-2 p-4">
          <p className="px-2 text-light fs-1 lh-base text-center">
            Choose a Normal Package that fits for You.
          </p>
        </div>
        <div className="container mt-5">
          <Row xs={1} md={5} className="g-4">
            {netPack.map((np) => (
              <Col key={np.id}>
                <Card className="bg-success text-center">
                  <Card.Body>
                    <Card.Header className="bg-info fs-3 text-dark shadow">
                      Bandwidth <br /> {np.bandwidth}
                    </Card.Header>
                    <Card.Body className="text-light text-start">
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Fiber Optics
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        24 Hours Unlimited
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Live TV
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Large FTP server
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Connected to BDIX
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Buffer less Youtube
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        Buffer less Facebook
                      </p>
                      <p className="m-0 p-0">
                        <TiTickOutline className="fs-3" />
                        24/7 Support
                      </p>
                      <p className="m-0 p-0 bg-dark fs-5 text-center text-light rounded-pill">
                        {np.price} BDT/Month
                      </p>
                    </Card.Body>
                    <Button
                      variant="light"
                      className="btn-lg rounded-pill m-0 px-4 py-0"
                    >
                      <a
                        href="tel:+8801624100101"
                        className="text-dark fs-6 text-decoration-none"
                      >
                        For Connection <br />{" "}
                        <span className="fw-bold">+880-1624100101</span>
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Regular;
