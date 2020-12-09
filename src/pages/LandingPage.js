import React from "react";
import Podcasts from "../components/Podcasts";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";

let LandingPage = () => {
  return (
    <>
      <div className="container-landing">
        <SideBar />
        <section>
          <h1 className="title-landing">Hablemos con un vodka</h1>
          <h3>On Line</h3>
          <h3>Directo</h3>
          <h2>Redes</h2>
          <Podcasts />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
