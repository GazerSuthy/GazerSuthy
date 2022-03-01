import React from "react";
import GazerSuthy from "../images/profile-picture.png";

const Hero = ({ homeSectionRef }) => {
  return (
    <div className="hero-wrapper" ref={homeSectionRef}>
      <div className="hero-container">
        <img
          src={GazerSuthy}
          alt="Gazersuthy dressed up"
          className="profile-pic"
        />
        <div className="mission-statement">
          <div className="mission-statement-design"></div>
          <h2 className="mission-statement-text">
            Rise To Your <strong className="value-text">Highest Value</strong>{" "}
            With The Support Of My Creations!
          </h2>
          <h5 className="do-text">front-end developer | ui designer</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
