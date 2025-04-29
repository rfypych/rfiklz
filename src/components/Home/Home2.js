import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiTelegram } from "react-icons/si";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
/*import { FaLinkedinIn } from "react-icons/fa"*/;

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I totally got hooked on coding! Been diving deep and picking up bits and pieces, ya know?
            Feels like I'm learning something new every day... I think! 🤷‍♂️
              <br />
              <br />I love digging into programming like
              <i>
                <b className="purple"> HTML, CSS, Javascript, and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are gettin' the hang of &nbsp;
              <i>
                <b className="purple">Web Technologies, Ethical Hacking </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for learnin' 
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CATCH ME ON</h1>
            <p>
              Don't be a <span className="purple">stranger, </span>hit me up here
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rfypych"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/rfyycrnge"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiTelegram />
                </a>
              </li>
              {/*<li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>*/}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rfikl_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
