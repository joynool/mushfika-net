import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fourOFour from "../../images/404.svg";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Image src={fourOFour} width="auto" alt="" fluid />
      <NavLink to={"/"}>
        <button
          style={{ position: "relative", bottom: "200px" }}
          className="fs-2 fw-light text-light btn-danger px-3 py-1 rounded-pill"
        >
          Go Home
        </button>
      </NavLink>
    </div>
  );
}

export default NotFound;
