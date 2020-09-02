import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <img
            alt="Cam relaxing in his rooftop hammock"
            className="mainHeadShot"
            src="https://i.imgur.com/X79tCpT.jpg"
          />
        </section>
        <section className="bio">
          <p>
            Hiya! I'm Cameron, a <span>Full-Stack Developer</span> with a
            background in New Media. In addition to&nbsp;
            <span>
              React, JavaScript, PostgreSQL, jQuery, HTML5, CSS3,&nbsp;
              <a
                href="https://camcorradoportfolio.s3.amazonaws.com/Cameron+Corrado's+Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                etc.
              </a>
            </span>
            , I bring a lot of relevant skills to the table from my previous
            career as a Senior Video Editor - attention to detail, a knack for
            problem solving, project &amp; time management, &amp; adaptive
            learning in a field of ever...advancing...technology...
          </p>
          <br />
          <p>
            When I'm not coding, I'm often found gardening with my cat Catkeisha
            in our rooftop garden, kickin' butts in online PvP video games,
            searching for vintage Halloween decor, or marching the streets of
            major (&amp; minor) cities in a huuuuuuuge LGBTQ marching band!
          </p>
        </section>
      </section>
    );
  }
}
