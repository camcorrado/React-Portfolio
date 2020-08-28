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
            REWORK I bring a lot of relevant skills to the table from my
            previous career as a senior video editor: project managment,
            Recently graduating from Thinkful as a Full-Stack Web Developer, I
            take pride &amp; find joy in problem-solving, seeing my ideas come
            to life, &amp; creating a satisfying user experience. I love to
            incorporate my New Media background into my work as a Full-Stack
            Developer.
          </p>
          <br />
          <p>
            When I'm not coding, I'm often found gardening on my rooftop with my
            cat, gaming online with friends, or marching the streets of major
            (&amp; minor) cities in a huuuuuuuge LGBTQ marching band! All of
            which is like coding! Like a garden, one must upkeep code. Like
            gaming with friends, coding is a problem solving social activity.
            Like a marching band, coding can be a creative outlet. Like a cat,
            coding can be lovably feisty!
          </p>
        </section>
      </section>
    );
  }
}
