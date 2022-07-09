import React from "react";

import SakuraTree from "../images/sakuraTree.png";
import perfectuniverselogo from "../images/Perfect-Universe-Logo.png";
import sharmilaLogo from "../images/sharmila-logo.png";
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

      <div className="design-block"></div>

      <div className="sites-container">
        <section className="developersSpecial-intro">
          <article className="brief">
            <p className="brief-p1">
              Web technologies is a medium that I use to solve your business
              problems. From attractive web designs that make your business
              stand out from it's competitors to custom built-in features that
              allows you to perform certain tasks. My websites brings in results
              that surpass your expectations!
            </p>
          </article>
          <img
            src={SakuraTree}
            alt="sakura cherry blossom tree"
            className="sakura-tree"
          />
        </section>

        {/* 
              Project 1: Perfect Universe Renovation
          */}
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
                  The goal was to differentiate this business as a long-term
                  investment that focuses on quality, luxurious builds. With the
                  solution of having a built-in slideshow feature that showcased
                  their work, they were able to improve their client's trust by
                  showing results. Incomparison to their previous marketing
                  strategy of vocal promises alone, this current solution allows
                  them to dominate their market space.
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
                  <button className="visit-site project-btn">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 
              Project 2: Dr.Sharmila 
          */}

          <div className="project-card project-2">
            <img
              src={sharmilaLogo}
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
                  The biggest turning point of my life was when I changed to a
                  whole foods diet with the help of this naturopath. The choice
                  of food not only affected by mood but also my mindset as well.
                  It was a privilege to collobrate with this naturopath to
                  design her best selling website!
                </p>
              </article>
              <div className="project-action-btns">
                <a
                  href="https://www.figma.com/file/RJLTJw7yc2fLefuSwzTu5W/Dr.-Sharmila-Website?node-id=0%3A1"
                  className="project-link"
                >
                  <button className="visit-site project-btn">
                    Visit Design File
                  </button>
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
