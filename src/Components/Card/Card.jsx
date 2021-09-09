/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./Card.css";
import { Fa500Px, FaHornbill, FaMagento, FaSlackHash } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <section className="container">
        <div className="row mt-16">
          <div className="col-lg-3 col-md-6 design">
            <div className="card">
              <div className="card-body">
                <h3>
                  <Fa500Px className="text-primary" />
                </h3>
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 design">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaHornbill className="text-primary" />
                </h2>
                <h4 className="card-title">Sed ut perspiciatis</h4>
                <p className="card-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 design">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaMagento className="text-primary" />
                </h2>
                <h4 className="card-title">Magni Dolores</h4>
                <p className="card-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 design">
            <div className="card">
              <div className="card-body">
                <h2>
                  <FaSlackHash className="text-primary" />
                </h2>
                <h4 className="card-title">Nemo Enim</h4>
                <p className="card-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
