import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Yo, what's up! I'm <span className="purple">Rofikul Huda </span>
            from <span className="purple"> East Java, Indonesia.</span>
            <br />
            Right now, I'm leveling up my skills in <span className="purple"> Ethical Hacking </span>
            and <span className="purple"> Web Development.</span>
            <br />
            I'm deep into all that tech stuff and loving every bit of it. I'm a Computer and Network Engineering student, study hard at SMK PGRI 1 Ngawi. 
            It's a hustle, but I'm all in, learning and growing every day. Can't wait to see where this journey takes me😁.
            <br />
            <br />
            Apart from that, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎧 Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> 📱 Scrolling Threads
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          <span style={{ fontSize: "smaller" }}> <i>"I have no special talent. I am only passionately curious."</i> </span>{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
