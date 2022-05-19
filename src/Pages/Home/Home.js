import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import Packages from "./Packages";
import Why from "./Why";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Why />
      <Packages />
      <Footer />
    </>
  );
}

export default Home;
