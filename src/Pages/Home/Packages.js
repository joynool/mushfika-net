import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Packages() {
  return (
    <div className="container pb-5">
      <div className="text-center mt-5 mb-4">
        <h1 className="py-5 display-5 text-decoration-underline">
          <FaQuoteRight className="text-info me-2" />
          Popular Packages
        </h1>
      </div>
      <Row xs={1} md={4} className="g-5">
        <Col>
          <Card className="bg-success text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
            <Card.Body>
              <Card.Title className="display-4 text-light">
                Basic 5Mbps
              </Card.Title>
              <Button variant="dark" className="btn-lg">
                <NavLink
                  to={"/normal"}
                  className="text-light text-decoration-none"
                >
                  Details
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-primary text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
            <Card.Body>
              <Card.Title className="display-4 text-light">
                Classic 10Mbps
              </Card.Title>
              <Button variant="dark" className="btn-lg">
                <NavLink
                  to={"/normal"}
                  className="text-light text-decoration-none"
                >
                  Details
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-danger text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
            <Card.Body>
              <Card.Title className="display-4 text-light">
                Jumbo 20Mbps
              </Card.Title>
              <Button variant="dark" className="btn-lg">
                <NavLink
                  to={"/normal"}
                  className="text-light text-decoration-none"
                >
                  Details
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-info text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
            <Card.Body>
              <Card.Title className="display-4 text-light">
                Business Custom
              </Card.Title>
              <Button variant="dark" className="btn-lg">
                <NavLink
                  to={"/corporate"}
                  className="text-light text-decoration-none"
                >
                  Details
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Packages;
