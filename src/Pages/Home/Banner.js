import React from "react";
import { Carousel } from "react-bootstrap";
//import bOne from "../../images/bOne.png";
//import bTwo from "../../images/bTwo.png";
//import bThree from "../../images/bThree.png";

function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SyNLDZR/bOne.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1
              className="mb-2"
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              SUPER FAST INTERNET
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/nRDr9WY/bTwo.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              LIVE TV & FTP SERVER
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/j42TJgP/bThree.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              HIGHER BANDWIDTH
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
