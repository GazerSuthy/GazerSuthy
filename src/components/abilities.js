import React from "react";

// imgs
import diamond from "../images/colourful_diamond.png";
import sun from "../images/golden_sun.png";
import meditatingBat from "../images/meditatingBat.png";

const Abilities = ({ appsRef }) => {
  return (
    <section className="gratitude-section">
      <div className="gratitude-container">
        <div className="logic-card-outer">
          <div className="logic-card-inner">
            <div className="card-row-1">
              <img
                src={diamond}
                alt="colourful triangles forming a diamond"
                className="card-art diamond"
              />
              <article className="card-description">
                <h3 className="card-head">Logic</h3>
                <p className="card-text">
                  Grateful to be able to develope apps. Inspired by my hero
                  Bruce Wayne, I always envisioned myself using the bat-computer
                  to create gadgets that uplift others.
                </p>
              </article>
            </div>
            <div className="card-row-2 logic-skills">
              <h6 className="logic-skill">JavaScript</h6>
              <h6 className="logic-skill">React</h6>
              <h6 className="logic-skill">Html</h6>
              <h6 className="logic-skill">Css</h6>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img
            src={meditatingBat}
            alt="batman meditating on a lotus flower"
            className="meditatingBat"
          />
        </div>

        <div className="creativity-card-outer">
          <div className="creativity-card-inner">
            <div className="card-row-1">
              <img src={sun} alt="golden sun" className="card-art sun" />
              <article className="card-description">
                <h3 className="card-head">Creativity</h3>
                <p className="card-text">
                  Nature not only heals me, it also inspires me to create art
                  with the help of my imagination! It is a blessing to have
                  support and guidance which helps me level up in all area of
                  life.
                </p>
              </article>
            </div>
            <div className="card-row-2 creativity-skills">
              <h6 className="creativity-skill">Figma</h6>
              <h6 className="creativity-skill">Pencil</h6>
              <h6 className="creativity-skill">Paper</h6>
            </div>

            {/* postion to scroll to */}
            <div className="app-ref-block" ref={appsRef}></div>
          </div>
        </div>
      </div>{" "}
      {/* end of gratitude-container div */}
    </section>
  );
};

export default Abilities;
