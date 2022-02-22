import React from "react";
import GazerSuthy from "../images/profile-picture.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <img
          src={GazerSuthy}
          alt="Gazersuthy dressed up"
          className="profile-pic"
        />
        <div className="mission-statement">
          <h2 className="mission-statement-text">
            Rise to your Highest Value With The Support Of My Creations!
          </h2>
        </div>

        <h5 className="do-text">front-end developer | ui designer</h5>
      </div>
    </div>
  );
};

export default Hero;
