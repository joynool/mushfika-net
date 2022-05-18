import React from "react";
import { Image } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";

function Clients() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-5">
      <div className="text-center mt-5 mb-4">
        <h1 className="py-5 display-5 text-decoration-underline">
          <FaQuoteRight className="text-info me-2" />
          Our Clients
        </h1>
      </div>
      <div className="bg-light p-5">
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              width={200}
              height={100}
              alt=""
              fluid
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
