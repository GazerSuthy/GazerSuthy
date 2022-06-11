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
                  The goal of this project was to differentiate Perfect
                  Universe’s Renovations as a long-term investment that focuses
                  on quality, luxurious builds in contrast to other renovators
                  that simply focus on offering the lowest bid price.
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
                    Visit design
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
                  With my role being a web designer, this project gave me the
                  opportunity to learn from other experienced members on the
                  team. The project lead shared remarkable wisdom which
                  completely altered my approach to goal setting.
                </p>
              </article>
              <div className="project-action-btns">
                <a
                  href="https://www.figma.com/file/RJLTJw7yc2fLefuSwzTu5W/Dr.-Sharmila-Website?node-id=0%3A1"
                  className="project-link"
                >
                  <button className="visit-site project-btn">
                    Visit Design
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
