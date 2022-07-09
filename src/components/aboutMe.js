import React from "react";

import Cause from "../images/hero-cause.jpg";

const AboutMe = ({ aboutSectionRef }) => {
  return (
    <section className="about-me" ref={aboutSectionRef}>
      <div className="about-container container">
        <h1 className="about-head">About Me</h1>
        <div className="about-info">
          <img src={Cause} alt="I am the star" className="about-pic" />
          <article className="aboutMe-article">
            <h1 className="about-head-largescreen">About Me</h1>
            <p className="about-me-1 about-text">
              Gazersuthy is a freelance (not a a medieval mercenary),
              self-taught front-end developer and ui designer based in Toronto.
            </p>
            <p className="about-me-2 about-text">
              I looks forward to new oppurtunities to collaborate with clients
              in order to create ground breaking innovative projects. My
              ambition is to form partnerships with organization to create apps
              that have meaningful impact in peoples lives.
            </p>
            <p className="about-me-3 about-text">
              Looking back I realizes it is the greatest privelage to to be able
              to create apps. Inspired by my hero Bruce Wayne, I always
              envisioned myself sitting infront of the bat-computer, creating
              gadgets to uplift others. It is a blessing to have support and
              guidance which helps me level up in all area of life.
            </p>
            <p className="about-me-4 about-text">
              Looking forward? Looking Back? How about the now?
            </p>
            <p className="about-me-5 about-text">
              Right now, I am only warming up getting ready for game time!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
