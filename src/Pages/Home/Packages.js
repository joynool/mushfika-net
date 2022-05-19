import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import PackModal from "../Modals/PackModal";

function Packages() {
  const [pack, setPack] = useState(0);
  const [packModalShow, setPackModalShow] = useState(false);

  const packDetails = (pack) => {
    setPack(pack);
    if (pack !== 0) {
      setPackModalShow(true);
    }
  };

  return (
    <>
      <div className="container pb-5">
        <div className="text-center mt-5 mb-4">
          <h1 className="py-5 display-5 text-decoration-underline">
            <FaQuoteRight className="text-info me-2" />
            Popular Packages
          </h1>
        </div>
        <div className="container">
          <Row xs={1} md={2} lg={4} className="g-5">
            <Col>
              <Card className="bg-success text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
                <Card.Body>
                  <Card.Title className="fs-1 text-light">
                    Basic &nbsp;5 Mbps
                  </Card.Title>
                  <Button
                    onClick={() => packDetails(5)}
                    variant="dark"
                    className="btn-lg"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-primary text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
                <Card.Body>
                  <Card.Title className="fs-1 text-light">
                    Classic 10 Mbps
                  </Card.Title>
                  <Button
                    onClick={() => packDetails(10)}
                    variant="dark"
                    className="btn-lg"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-warning text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
                <Card.Body>
                  <Card.Title className="fs-1 text-light">
                    Classic 15 Mbps
                  </Card.Title>
                  <Button
                    onClick={() => packDetails(15)}
                    variant="dark"
                    className="btn-lg"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-danger text-center animate__animated animate__pulse animate__infinite animate__delay-2s">
                <Card.Body>
                  <Card.Title className="fs-1 text-light">
                    Jumbo 20 Mbps
                  </Card.Title>
                  <Button
                    onClick={() => packDetails(20)}
                    variant="dark"
                    className="btn-lg"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <PackModal
        pack={pack}
        packModalShow={packModalShow}
        setPackModalShow={setPackModalShow}
      />
    </>
  );
}

export default Packages;
