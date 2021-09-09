import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <div classNam="container-div" id="pricing">
        <h2 className="head-div text-center">PRICING</h2>
        <p className="text-div text-center mt-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div table-div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card prices">
                <div className="card-body text-center">
                  <h4 className="free mt-2 mb-4 text-primary">FREE</h4>
                  <h2 className="text-primary">$0 / month</h2>
                  <h6>Aida dere</h6>
                  <h6>Nec feugiat nisl</h6>
                  <h6>Nulla at volutpat dola</h6>
                  <h6>Pharetra massa</h6>
                  <h6>Massa ultricies mi</h6>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-4"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 bg-pr">
              <div className="card prices">
                <div className="card-body rounded text-center bg-primary text-white">
                  <h4 className="free mt-2 mb-4 text-white">BUSINESS</h4>
                  <h2>
                    <span className="text-white">$0</span> / month
                  </h2>
                  <h6>Aida dere</h6>
                  <h6>Nec feugiat nisl</h6>
                  <h6>Nulla at volutpat dola</h6>
                  <h6>Pharetra massa</h6>
                  <h6>Massa ultricies mi</h6>
                  <button type="button" class="btn btn-outline-light mt-4">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card prices">
                <div className="card-body text-center">
                  <h4 className="free mt-2 mb-4 text-primary">FREE</h4>
                  <h2 className="text-primary">$0 / month</h2>
                  <h6>Aida dere</h6>
                  <h6>Nec feugiat nisl</h6>
                  <h6>Nulla at volutpat dola</h6>
                  <h6>Pharetra massa</h6>
                  <h6>Massa ultricies mi</h6>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-4"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
