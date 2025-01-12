import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgWindows } from "react-icons/cg";
import { DiAndroid } from "react-icons/di";
import {
  SiVisualstudiocode,
  //SiPostman,
  //SiSlack,
  //SiVercel,
  SiKalilinux,
  SiMagisk,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMagisk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
