import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row } from "react-bootstrap";

function CustomNav() {
  return (
    <nav>
      <Navbar bg="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="nav-detail">
          <Row>
            <Col>
              <Link to="/">Home</Link>
            </Col>

            <Col>
              <Link to="/about">About me</Link>
            </Col>

            <Col>
              <Link to="/projects">Projects</Link>
            </Col>

            <Col>
              <Link to="/resume">Resume</Link>
            </Col>
          </Row>
        </div>
      </Navbar>
    </nav>
  );
}

export default CustomNav;
