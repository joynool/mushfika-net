import React, { useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
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
import { NavLink } from "react-router-dom";
import CashModal from "../Modals/CashModal";
import PackModal from "../Modals/PackModal";

function Footer() {
  const [modalShow, setModalShow] = useState(false);
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
      <Navbar bg="dark" variant="dark" className="mt-5 py-4">
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
                  className="text-white fs-3 m-0 p-0"
                  title="Facebook"
                >
                  <FaFacebook className="btn-outline-light rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-3 m-0 p-0"
                  title="Twitter"
                >
                  <FaTwitter className="btn-outline-light rounded mx-2" />
                </Nav.Link>
                <Nav.Link
                  href="/home"
                  className="text-white fs-3 m-0 p-0"
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
              <Button
                onClick={() => packDetails(5)}
                variant="outline-light"
                className="m-0 p-1 border-0 rounded-pill"
              >
                Basic Package - 5 Mbps
              </Button>
              <Button
                onClick={() => packDetails(10)}
                variant="outline-light"
                className="m-0 p-1 border-0 rounded-pill"
              >
                Classic Package - 10 Mbps
              </Button>
              <Button
                onClick={() => packDetails(15)}
                variant="outline-light"
                className="m-0 p-1 border-0 rounded-pill"
              >
                Classic Package - 15 Mbps
              </Button>
              <Button
                onClick={() => packDetails(20)}
                variant="outline-light"
                className="m-0 p-1 border-0 rounded-pill"
              >
                Jumbo Package - 20 Mbps
              </Button>
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
      <CashModal modalShow={modalShow} setModalShow={setModalShow} />
      <PackModal
        pack={pack}
        packModalShow={packModalShow}
        setPackModalShow={setPackModalShow}
      />
    </>
  );
}

export default Footer;
