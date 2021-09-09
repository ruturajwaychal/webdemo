import React from "react";
import "./Services.css";
import {
  FaXbox,
  FaFileCsv,
  FaSatelliteDish,
  FaQrcode,
  FaRegCaretSquareRight,
  FaXRay,
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="container-main" id="services">
        <div className="head-div">
          <h2 className="service-heading">SERVICES</h2>
          <h6 className="serices">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </h6>
        </div>

        {/* row 1 */}

        <div className="row lorem-div">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaQrcode className="text-primary mx-auto" />
                </h2>
                <br />
                <h3 className="card-title text-center">Lorem Ipsum</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaRegCaretSquareRight className="text-primary text-center" />
                </h2>
                <br />
                <h3 className="card-title text-center">Sed Perspiciatis</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaXRay className="text-primary text-center" />
                </h2>
                <br />
                <h3 className="card-title text-center">Lorem Ipsum</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* row 2 */}

        <div className="row lorem-div">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaXbox className="text-primary justify-content-center" />
                </h2>
                <br />
                <h3 className="card-title text-center">Lorem Ipsum</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaFileCsv className="text-primary text-center" />
                </h2>
                <br />
                <h3 className="card-title text-center">Lorem Ipsum</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaSatelliteDish className="text-primary text-center" />
                </h2>
                <br />
                <h3 className="card-title text-center">Lorem Ipsum</h3>
                <p className="card-text text-center">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action text-center">
        <h2>Call To Action</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia <br /> deserunt mollit anim id est
          laborum.
        </p>
        <button type="button" class="btn btn-outline-light">
          Call To Action
        </button>
      </div>
    </>
  );
};

export default Services;
