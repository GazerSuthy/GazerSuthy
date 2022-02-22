import React from "react";

import SakuraTree from "../images/sakuraTree.png";

const Websites = ({ aboutMeRef }) => {
  return (
    <section className="developerSpecial">
      {/* Banner Style */}
      <div className="banner sites-banner">
        <div className="banner-head site-head">
          <h2 className="banner-head-title site-head-title">Web Apps</h2>
          <h5 className="banner-head-about site-head-about">
            designed and developed
          </h5>
        </div>
      </div>
      <div className="sites-container">
        <section className="developersSpecial-intro">
          <article className="brief">
            <h3 className="brief-head">Developer's Special</h3>
            <p className="brief-p1">
              Health and wellness apps that raises peoples vibration.
            </p>
            {/* <p className="brief-p1">
              Authentic custom built web technologies engineered to leave
              everlasting first impressions.
            </p> */}
          </article>
          <img
            src={SakuraTree}
            alt="sakura cherry blossom tree"
            className="sakura-tree"
          />
        </section>
      </div>

      {/* postion to scroll to */}
      <div className="about-ref-block" ref={aboutMeRef}></div>
    </section>
  );
};

export default Websites;
