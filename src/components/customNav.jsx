import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row } from "react-bootstrap";

class CustomNav extends Component {
  render() {
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
                <Link to="/about">About</Link>
              </Col>

              <Col>
                <Link to="/projects">Projects</Link>
              </Col>

              <Col>
                <a
                  style={{ display: "table-cell" }}
                  href="https://docs.google.com/document/d/1uQrd9MzPF5DDZ2V1Pad30H9CXHs0CFJzQQGTu0MobeQ/edit"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                >
                  Resume
                </a>
              </Col>
            </Row>
          </div>
        </Navbar>
      </nav>
    );
  }
}

export default CustomNav;
