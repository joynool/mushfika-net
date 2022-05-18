import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
//import logo from "../../images/logo.png";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="sticky-top shadow">
      <Navbar bg="light" variant="light" className=" bg-secondary">
        <Container className="flex-column flex-lg-row">
          <Navbar.Text>
            <BsEnvelope className="fs-4" />{" "}
            <a
              className="text-dark btn-info rounded-pill px-2 py-1 text-decoration-none"
              href="mailto:netmushfika.bd@gmail.com"
            >
              netmushfika.bd@gmail.com
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <BsTelephone className="fs-4" />{" "}
            <a
              className="text-dark btn-info rounded-pill px-2 py-1 text-decoration-none"
              href="tel:+8801624100101"
            >
              +880-1624100101, +880-258053424
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <BiSupport className="fs-4" />{" "}
            <a
              className="text-dark btn-info rounded-pill px-2 py-1 text-decoration-none"
              href="tel:+8801624100101"
            >
              24x7 (9:00 AM - 10:00 PM)
            </a>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"}>
              <Image
                src="https://i.ibb.co/0Vkfk1Y/logo.png"
                width="200px"
                alt="water drops"
                fluid
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto justify-content-center align-items-center">
              <NavLink
                to={"/"}
                className="btn-outline-secondary rounded-pill p-2 me-2 text-decoration-none"
              >
                Home
              </NavLink>
              <NavLink
                to={"/services"}
                className="btn-outline-secondary rounded-pill p-2 me-2 text-decoration-none"
              >
                Services
              </NavLink>
              <NavDropdown
                title="Packages"
                id="collasible-nav-dropdown"
                className="btn-outline-secondary rounded-pill px-2 me-2  text-decoration-none"
              >
                <NavDropdown.Item>
                  <NavLink
                    to={"/normal"}
                    className="text-dark text-decoration-none"
                  >
                    Normal Packages
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    to={"/corporate"}
                    className="text-dark text-decoration-none"
                  >
                    Corporate Packages
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to={"/about"}
                className="btn-outline-secondary rounded-pill p-2 me-2 text-decoration-none"
              >
                About Us
              </NavLink>
              <NavLink
                to={"/contact"}
                className="btn-outline-secondary rounded-pill p-2 text-decoration-none"
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
