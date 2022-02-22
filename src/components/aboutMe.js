import React from "react";

import star from "../images/about-me-pic.png";
import stars_bg from "../images/stars.png";
import footer_img from "../images/footer-img.png";

const AboutMe = ({ aboutMeRef }) => {
  return (
    <section className="about-me" ref={aboutMeRef}>
      <div className="about-container container">
        <img
          src={stars_bg}
          alt="night sky illuminated with stars"
          className="starsBG"
        />
        <img
          src={stars_bg}
          alt="night sky illuminated with stars"
          className="starsBG bg-postion2"
        />
        <h1 className="about-head">About Me</h1>
        <div className="about-info">
          <img src={star} alt="I am the star" className="about-pic" />
          <article className="aboutMe-article">
            <h1 className="about-head-largescreen">About Me</h1>
            <p className="about-me-1 about-text">
              Gazersuthy is a freelance (not a a medieval mercenary),
              self-taught front-end developer and ui designer based in Toronto.
            </p>
            <p className="about-me-2 about-text">
              He looks forward to new oppurtunities to collaborate with clients
              in order to create ground breaking innovative projects. His
              ambition is to form partnerships with organization to create apps
              that have meaningful impact in peoples lives.
            </p>
            <p className="about-me-3 about-text">
              Looking back he realizes it is the greatest privelage to have the
              freedom and resources to live a lifestyle full of abundance,
              working on his dream projects and perfecting his craft
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
