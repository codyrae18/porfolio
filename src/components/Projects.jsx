import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import photoandcamera1 from "../photoandcamera/photoandcamera1.png";
function Projects() {
  return (
    <div>
      <div className="projects">
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <div className="overflow">
                <Card.Img variant="top" src={photoandcamera1} />
              </div>
              <Card.Body>
                <Card.Title>Photos and Cameras</Card.Title>
                <Card.Text>
                  A website for Photographers and Photography that can share
                  photos and see other people’s images.
                </Card.Text>
                <Button variant="primary">Git Hub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <div className="overflow">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1572270907014-c31da1c54124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                />
              </div>
              <Card.Body>
                <Card.Title>fitCalisthenix</Card.Title>
                <Card.Text>
                  A website that can help you motivated in fitness without any
                  gym membership needed.
                </Card.Text>
                <Button variant="primary">Git Hub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <div className="overflow">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1572162396896-7a30d5f9a261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
              </div>
              <Card.Body>
                <Card.Title>ThisPacificPlace</Card.Title>
                <Card.Text>
                  This is a traveling website that could show you different
                  tourist spots and adventures specifically in the Philippines.
                </Card.Text>
                <Button variant="primary">Git Hub</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
