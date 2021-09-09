/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <p className="copy mx-5">
              © Copyright <span className="fw-bold"> OnePage. </span> All Rights
              Reserved <br />
              Designed by <span className="text-primary">Ruturaj Waychal</span>
            </p>
          </div>

          <div className="col-lg-6 col-lg-6">
            <h3 className="social mx-5">
              <FaTwitter className="text-primary cursor" />
              <FaFacebookSquare className="text-primary cursor" />
              <FaInstagram className="text-primary cursor" />
              <FaSkype className="text-primary cursor" />
              <FaLinkedinIn className="text-primary cursor" />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
