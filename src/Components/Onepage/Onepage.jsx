/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Onepage.css";

const Onepage = () => {
  return (
    <>
      <div className="container" id="onepage">
        <div className="row">
          <div className="col-md-6 col-lg-2">
            <h5 className="one">OnePage</h5>
            <div className="fw-light">
              <p>
                A108 Adam Street <br /> New York, NY 535022 <br /> United States
              </p>
              <p>
                <span className="fw-bold">Phone: </span> +1 5589 55488 55
              </p>
              <p className="mt-0">
                <span className="fw-bold">Email: </span> info@example.com
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 text-center">
            <h5 className="one">Useful Links</h5>
            <div className="align-items-right">
              <a className="nav-link" href="#">
                Home
              </a>

              <a className="nav-link" href="#">
                About Us
              </a>

              <a className="nav-link" href="#">
                Services
              </a>

              <a className="nav-link" href="#">
                Terms Of Services
              </a>

              <a className="nav-link" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 text-center">
            <h5 className="one">Our Services</h5>
            <a className="nav-link" href="#">
              Web Design
            </a>

            <a className="nav-link" href="#">
              Web Development
            </a>

            <a className="nav-link" href="#">
              Product Management
            </a>

            <a className="nav-link" href="#">
              Marketing
            </a>

            <a className="nav-link" href="#">
              Graphic Design
            </a>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="one-main">
              <h5 className="one">Join Our Newsletter</h5>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa <br /> legam
                noster magna
              </p>
              <input type="text" placeholder=" " />
              <button type="button" className="btn btn-primary mx-4 px-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onepage;
