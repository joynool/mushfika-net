import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { IoConstruct } from "react-icons/io5";

function Corporate() {
  return (
    <>
      <Header />
      <div className="bg-primary p-5 my-5 d-flex flex-column justify-content-center align-items-center">
        <IoConstruct className="display-1 text-light" />
        <p className="display-4 px-5 py-2 my-5 text-center text-light rounded-pill shadow">
          COMING SOON...
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Corporate;
