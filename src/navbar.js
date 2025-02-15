import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Rakko Raj Delos Santos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                BSIT - 31E1
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Information
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Skills
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Soft Skills
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hard Skills
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// ContactInfo Component
function ContactInfo() {
  return (
    <section id="contact-info" className="contact-info mb-5">
      <h2 className="section-title">Contact Information</h2>
      <p>Email: rakodsantos05@google.com</p>
      <p>Phone: 0962 325 8290</p>
      <p>Teams: 1264-22@itlyceumalabang.onmicrosoft.com</p>
      <p>Github: Rakko-Delos-Santos</p>
      <br />
    </section>
  );
}

// Education Component
function Education() {
  return (
    <section id="education" className="education mb-5">
      <h2 className="section-title">Education</h2>
      <ul>
        <li>
          <strong>Tunasan National Highschool</strong> - Grade 11-12 <br />
          2020 - 2021
        </li>
        <br />
        <li>
          <strong>Muntinlupa Institute of Technology</strong> - High School (7 -
          10) <br />
          2016 - 2020
        </li>
        <br />
        <li>
          <strong>Putatan Elementary School</strong> - Primary (1 - 6) <br />
          2010 - 2016
        </li>
        <br />
      </ul>
    </section>
  );
}

// Skills Component
function Skills() {
  return (
    <section id="skills" className="skills mb-5">
      <h2 className="section-title">Skills</h2>
      <ul>
        <li>
          <strong>Hard Skills</strong>
          <ul>
            <li>Basic Knowledge of MS Office</li>
            <li>Basic Knowledge of VB.net</li>
            <li>Basic Knowledge of HTML and CSS</li>
          </ul>
        </li>
        <br />
        <li>
          <strong>Soft Skills</strong>
          <ul>
            <li>Good Listener</li>
            <li>Adaptable to Environment</li>
            <li>Quick Learner</li>
            <li>Good Communication</li>
            <li>Creative</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

// Profile Component
function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <ContactInfo />
        </div>
        <div className="col-12 col-md-6">
          <Education />
        </div>
        <div className="col-12">
          <Skills />
        </div>
      </div>
    </div>
  );
}

// App Component (Main)
function App() {
  return (
    <div>
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
