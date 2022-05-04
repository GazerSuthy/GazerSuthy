import React from "react";

import SakuraTree from "../images/sakuraTree.png";
import perfectuniverselogo from "../images/Perfect-Universe-Logo.png";
import sakuraPetal from "../images/sakura-petal-bg.png";

import { Link } from "react-router-dom";

const Websites = ({
  setDifferentPage,
  projectRef,
  aboutMeRef,
  setScrollTo,
}) => {
  return (
    <section className="developerSpecial">
      {/* Banner Style */}
      <div className="banner sites-banner">
        <div className="banner-head site-head">
          <h2 className="banner-head-title site-head-title">Client Builds</h2>
          <h5 className="banner-head-about site-head-about">
            designed and developed
          </h5>
        </div>
      </div>

      {/* scroll ref */}
      <div className="project-ref" ref={projectRef}></div>

      <div className="sites-container">
        <section className="developersSpecial-intro">
          <article className="brief">
            <p className="brief-p1">
              Authentic custom built web technologies engineered to leave
              everlasting first impressions.
            </p>
          </article>
          <img
            src={SakuraTree}
            alt="sakura cherry blossom tree"
            className="sakura-tree"
          />
        </section>

        <div className="client-project-container">
          <div className="project-card project-1">
            <img
              src={perfectuniverselogo}
              alt="logo of project"
              className="project-logo project1-logo"
            />
            <div className="project-desc">
              <img
                src={sakuraPetal}
                alt="background design for text"
                className="proj-desc-bg"
              />
              <article className="project-text">
                <p className="project-text-1">
                  The goal of this project was to differentiate Perfect
                  Universe’s Renovations as a long-term investment that focuses
                  on quality, luxurious builds in contrast to other renovators
                  that simply focus on offering the lowest bid price.
                </p>
                <p className="project-text-2">
                  The biggest challenge was figuring out how to present the
                  projects in a way that didn’t overwhelm the user. This lead to
                  the solution of implementing an interactive slideshow which
                  highlighted the different stages of the renovation process.
                </p>
              </article>
              <div className="project-action-btns">
                <Link
                  to="/perfectUniverse"
                  onClick={() => {
                    setDifferentPage(true);
                    setScrollTo("home");
                  }}
                >
                  <button className="view-process project-btn">
                    View Process
                  </button>
                </Link>
                <a
                  href="https://www.mrturtlespeed.com/"
                  className="project-link"
                >
                  <button className="visit-site project-btn">Visit Site</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* postion to scroll to */}
      <div className="about-ref-block" ref={aboutMeRef}></div>
    </section>
  );
};

export default Websites;
