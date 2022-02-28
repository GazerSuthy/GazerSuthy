import React from "react";

// imgs
import diamond from "../images/colourful_diamond.png";

const Abilities = ({ appsRef }) => {
  return (
    <section className="gratitude-section">
      <div className="gratitude-container">
        {/* Developer Special Intro */}
        <section className="developer-special">
          <div className="developer-special-head">
            <h2 className="special-title">Developer Special: </h2>
            <h2 className="special-niche">Health & Wellness</h2>
          </div>
          <article className="gratitude-text">
            Grateful to be able to create apps. Inspired by my hero Bruce Wayne,
            I always envisioned myself sitting infront of the bat-computer,
            creating gadgets to uplift others. It is a blessing to have support
            and guidance which helps me level up in all area of life.
          </article>
        </section>

        {/* Developer Special Card */}
        <div className="logic-card-outer">
          <div className="logic-card-inner">
            <div className="card-row-1">
              <img
                src={diamond}
                alt="colourful triangles forming a diamond"
                className="card-art diamond"
              />
              <article className="card-description">
                <p className="card-text">web apps</p>
                <p className="card-text">personal websites</p>
                <p className="card-text">design mockups</p>
              </article>
            </div>
            <div className="card-row-2 logic-skills">
              <h6 className="logic-skill">Design</h6>
              <h6 className="logic-skill">Develope</h6>
              <h6 className="logic-skill">Market</h6>
            </div>
          </div>
        </div>

        {/* postion to scroll to */}
        <div className="app-ref-block" ref={appsRef}></div>
        {/* end of gratitude-container div */}
      </div>
    </section>
  );
};

export default Abilities;
