/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="home" className="navbar-brand mx-4">
          <h3 className="mx-4 heading-top">OnePage</h3>
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#services">
                Services<span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#home">
                Team
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownmenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#onepage">
                Contact
              </a>
            </li>
            <div className="h-auto">
              <button type="button" className="btn btn-primary mx-4 px-3">
                Get Started
              </button>
            </div>
          </ul>
        </div>
      </nav>
      <hr className="mt-0" />
    </>
  );
};

export default Navbar;
