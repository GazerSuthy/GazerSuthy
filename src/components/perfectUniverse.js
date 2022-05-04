import React from "react";

import perfectUniverseMindMap from "../images/perfect-universe-mindmap.png";
import perfectUniverseWireframe from "../images/perfect-universe-wireframe.jpg";
import projectTable from "../images/project-table.png";
import projectSlideshow from "../images/project-slideshow.png";
import projectSlideshowMob from "../images/project-slideshow-mob.png";

const ViewProcess = () => {
  return (
    <div className="viewProcess-bg">
      <div className="process-container">
        <section className="roles-section">
          <h2 className="project-role">
            <span className="role-label">Project Role:</span>
            <div className="roles">
              Designer <span className="x-highlight">X</span> Developer{" "}
              <span className="x-highlight">X</span> Copywriter
            </div>
          </h2>
        </section>

        <main className="project-analysis">
          <h3 className="analysis-head">
            <span className="number-highlight">01</span> Strategy Session
          </h3>

          <section className="project-col1">
            <div className="mindmap-box">
              <img
                src={perfectUniverseMindMap}
                alt="Mind map of the website design"
                className="mindmap"
              />
              <article className="mindmap-explanation text-bg">
                <p className="mindmap-p1">
                  During the strategy session, I get to understand the goals of
                  the client and see how I can provide the most value that
                  produces the best results.
                </p>
                <p className="mindmap-p2">
                  I learned that the client desired to have a portfolio website
                  that will showcase his highlight projects. His goal was to
                  increase his credibility as a renovator after realizing that
                  it was hard to build trust with verbal promises alone.
                </p>
                <p className="mindmap-p3">
                  He needed to be able to show the results of his skill which
                  ultimately lead him to collaborate with me to produce this web
                  application
                </p>
              </article>
            </div>

            <article className="self-goal text-bg">
              <h3 className="article-label">Self Goal</h3>
              <p className="self-goal-text">
                My personal goal with this project was to change the users'
                perception of renovations as something worth considering as a
                long-term investment rather than a quick-fix temporary solution.
                Users will look at the long-term build quality to gain the most
                profit. This will ultimately work in the business's favor as
                users will even pay more money to ensure that the business
                delivers a successful top-tier renovation in comparison to other
                renovators.
              </p>
            </article>
          </section>

          <h3 className="analysis-head">
            <span className="number-highlight">02</span> User Experience Design
          </h3>
          <section className="project-col2">
            <div className="wireframe-box">
              <img
                src={perfectUniverseWireframe}
                alt="Wireframe of the website's layout"
                className="mindmap wireframe"
              />
              <article className="mindmap-explanation text-bg">
                <p className="mindmap-p1">
                  When desiging the structure of the website, I came up with two
                  solutions that coincided with the clients goal.
                </p>
                <p className="mindmap-p2">
                  The first was a double page approach which emphasized on
                  marketing services
                </p>
                <p className="mindmap-p3">
                  The second solution was a single page approach which placed
                  emphasis on showcasing the projects
                </p>
              </article>
            </div>

            <div className="table-box">
              <img
                src={projectTable}
                alt="table showing the pros and cons of each solution"
                className="project-table"
              />
              <article className="clients-choice">
                Both solutions achieved different goals of the client, however
                the client favored the second solution since the business owner{" "}
                <span className="yellow-highlight">valued</span> the mobile and
                desktop users’ experience more than the marketing of his
                services
              </article>
            </div>
          </section>

          <h3 className="analysis-head">
            <span className="number-highlight">03</span> Take Action
          </h3>
          <section className="project-col3">
            <div className="slideshow-container">
              <img
                src={projectSlideshow}
                alt="slideshow that showcases projects"
                className="mindmap slideshow-img"
              />

              <h6 className="img-caption">
                an interactive slideshow feature that displays the different
                progressions of the project
              </h6>
            </div>

            <div className="flex-container">
              <div className="cta-container">
                <article className="explain-action text-bg">
                  <p className="mindmap-p1">
                    The project section is designed to grab the users’ attention
                    with the use of a bright cooured background. Both before and
                    after states of the project are shown to emphasize the
                    transformation during the renovation.
                  </p>
                  <p className="mindmap-p2">
                    By decreasing the size of the before picture, it allows the
                    user to focus mainly on the results of the project with the
                    hint of the projects original conditions.
                  </p>
                </article>

                <a
                  href="https://www.mrturtlespeed.com/"
                  className="project-link"
                >
                  <button className="view-process call-to-action-btn project-btn">
                    Visit Site
                  </button>
                </a>
              </div>

              <img
                src={projectSlideshowMob}
                alt="Mobile version of slideshow functionality"
                className="mobile-slideshow"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ViewProcess;
