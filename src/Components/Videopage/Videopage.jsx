import React from "react";
import aa from "../../../src/images/about-video.jpg";

import "./Videopage.css";

const Videopage = () => {
  return (
    <>
      <div className="container" id="portfolio">
        <div className="row video">
          <div className="col-md-6 col-lg-6">
            <img className="d-block w-100 img1" src={aa} alt="videoimage" />
          </div>

          <div className="col-md-6 col-lg-6">
            <h3 className="head-h3">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <h6 className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <ul>
              <li className="mt-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="mt-1">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="mt-1">
                Voluptate repellendus pariatur reprehenderit corporis sint.
              </li>
              <li className="mt-1">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p className="mx-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videopage;
