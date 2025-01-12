import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiTelegram } from "react-icons/si";
import {
  AiFillGithub,
  /*AiOutlineTwitter,*/
  AiFillInstagram,
} from "react-icons/ai";
/*import { FaLinkedinIn } from "react-icons/fa"*/;

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Rofikul Huda with 🧠</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>copyright © {year} rfypych</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rfypych"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/*<li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>*/}
            <li className="social-icons">
              <a
                href="https://t.me/rfyycrnge"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rfikl_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
