import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
//import service from "../../images/service.png";
import {
  FaQuoteRight,
  FaTachometerAlt,
  FaHome,
  FaBuilding,
  FaServer,
  FaSpinner,
  FaTv,
} from "react-icons/fa";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function Services() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <Image
            src="https://i.ibb.co/FhZgXLG/service.png"
            alt="services"
            fluid
          />
        </div>
        <h1 className="text-center fw-normal text-dark display-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
          OUR SERVICES
        </h1>
        <FaQuoteRight className="display-4 text-info mt-4" />
        <h5 className="fw-light fs-2 text-center">
          We like to introduce ourselves as Internet Service Provider (ISP).
        </h5>
        <div className="bg-primary my-5 p-4">
          <p className="px-2 text-light fs-5 lh-base text-center">
            MUSHFIKA NET is providing variety of services to it's client from
            data devices to internet bandwidth. Spreading Effective Broadband
            Internet Connectivity in Bangladesh is our key concern. Moreover, we
            supply quality data connectivity products to our customer with a
            view to get them reliable and consistence broadband internet
            connectivity.
          </p>
        </div>
        <div className="container my-5">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="shadow text-center">
                <FaTachometerAlt className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Super Fast Internet</Card.Title>
                  <Card.Text>
                    We provide high quality fast internet broadband connectivity
                    at low price in comparison with other competitors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaHome className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Home Connectivity</Card.Title>
                  <Card.Text>
                    Through optical fiber we establish our broadband connection
                    that experienced our clients smooth connectivity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaBuilding className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Corporate Connectivity</Card.Title>
                  <Card.Text>
                    To meet up corporate demand we not only supply fast internet
                    connectivity but also deliver dedicated premium support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaServer className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Large FTP Server</Card.Title>
                  <Card.Text>
                    We have allocated dedicated FTP server for our valuable
                    clients that already packed up with huge resources.
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
                    If you are a YouTube or Facebook lover, you will definitely
                    love our Buffer less Streaming Services. It's awesome.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow text-center">
                <FaTv className="text-primary display-1 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Live TV Server</Card.Title>
                  <Card.Text>
                    Live TV channels, another premium services that have already
                    been integrated with our Broadband Internet Package.
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

export default Services;
