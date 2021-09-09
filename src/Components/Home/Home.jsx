import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <center>
        <div className="container" id="home">
          <h1 className="heading">
            One Page Bootstrap <br /> Website Template
          </h1>
          <br />
          <h3 className="title">We are team of talented designers</h3>
          <br />
          <div className="h-auto">
            <button type="button" class="btn btn-primary btn-lg">
              Get Started
            </button>
          </div>
        </div>
      </center>
    </>
  );
};

export default Home;
