import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import Packages from "./Packages";
import Why from "./Why";

function Home({ setModalShow }) {
  return (
    <>
      <Header />
      <Banner />
      <Why setModalShow={setModalShow} />
      <Packages />
      <Footer />
    </>
  );
}

export default Home;
