import React from "react";

// imgs
import cccgt_logo from "../images/cccgt-logo.png";

const Abilities = ({ appsRef }) => {
  return (
    <section className="gratitude-section">
      <div className="gratitude-container">
        {/* Developer Special Intro */}

        <div className="cccgt">
          <article className="gratitude-message">
            <p className="partnership">
              I’ve partnered with this amazing Toronto organization that you may
              know of.
            </p>
            <p className="gratitude-desc">
              It is the greatest privelage to design the website for the Chinese
              Cultural Centre. Their cause for supporting and strengthening
              their local area inspired me to join this wholesome community!
            </p>
          </article>

          <section className="cccgt-logo-wrapper">
            <img
              src={cccgt_logo}
              alt="Chinese Cultural Centre Logo"
              className="cccgt-logo"
            />

            <div className="case-study-btns">
              <a href="https://www.cccgt.org" className="cccgt-btn visit">
                visit website
              </a>
              <a
                href="https://www.figma.com/file/qN7iNnlso14NL95GVTwm9A/CCCGT?node-id=0%3A1"
                className="cccgt-btn view"
              >
                view design
              </a>
              <a
                href="https://www.figma.com/file/GmLjT5esvpFm6I45MYMyAZ/Chinese-Cultural-Center"
                className="cccgt-btn study"
              >
                case study
              </a>
            </div>
          </section>
        </div>

        {/* postion to scroll to */}
        <div className="app-ref-block" ref={appsRef}></div>
        {/* end of gratitude-container div */}
      </div>
    </section>
  );
};

export default Abilities;
