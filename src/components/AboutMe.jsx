import React from "react";
import { Image } from "react-bootstrap";

function AboutMe() {
  return (
    <div>
      <div className="profile">
        <Image
          style={{
            display: "flex",
            maxWidth: "430px",
            maxHeight: "655px",
            width: "auto",
            height: "auto"
          }}
          src="https://miro.medium.com/max/3150/2*dUTdv0YI5JSSHYbVZ7h1cA.png"
        />
      </div>
      <div className="profile-info">
        <h1>2019 - Software Developer</h1>
        <p>Flatiron School</p>
        <h1>2012 - 2017 Computer Engineering</h1>
        <p>Western Leyte College</p>
      </div>
    </div>
  );
}

export default AboutMe;
