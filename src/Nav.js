import React, { Component } from "react";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <section className="name">
          <h1 className="firstname">Cameron</h1>
          <h1>Corrado</h1>
        </section>
        <section className="buttons">
          <ul className="navLinks">
            <li className="gmail">
              <a href="mailto:camcorrado@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/camcorrado" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="faIcon" />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/camcorrado/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="faIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://camcorradoportfolio.s3.amazonaws.com/Resume.pdf"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGraduationCap} className="faIcon" />
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}
