import React from "react";

// img
import resonate_pic1 from "../images/resonate-1.png";
import resonate_pic2 from "../images/resonate-2.png";
import cardArt1 from "../images/card-art-1.png";
import mobileFeatures from "../images/mobile-features.png";

import { Link } from "react-router-dom";

const MusicApp = ({ setDifferentPage, lessonsRef }) => {
  return (
    <section className="project-section">
      {/* Banner Style */}
      <div className="banner">
        <div className="banner-head">
          <h2 className="banner-head-title">Resonate 432hz</h2>
          <h5 className="banner-head-about">music web-player app</h5>
        </div>
      </div>
      <div className="project-container container">
        <section className="row-1">
          <article className="row-1-description">
            <p className="row-1-text">
              I developed resonate which is a music web-player app after
              learning about the healing benefits of the 432hz frequency and
              discovered the importance of listening to uplifting music in order
              to create a constructive mindset.
            </p>
            <br></br>
            <p className="row-1-text">
              Listening to frequencies such as 432hz, improves the user's health
              and wellbeing as the frequency stimulates the mind to be in calm
              and relaxed zen-like state.
            </p>
          </article>
          <img
            src={resonate_pic1}
            alt="homepage of the music web-player app"
            className="row-1-img"
          />
        </section>

        <section className="row-2">
          <article className="row-2-description">
            <p className="row-2-text">
              I was in the search for a high quality music webplayer that
              contained no ads or monthly prescriptions. An app like that seemed
              to good to be true!
            </p>
            <p className="row-2-text">
              That’s when I decided to learn web development in order to
              manifest this app idea which is a music platform that promotes
              uplifting anime music tuned to the 432hz frequency.
            </p>
          </article>
          <img
            src={resonate_pic2}
            alt="mobile version of the music web-player app"
            className="row-2-img"
          />
        </section>

        <table className="app-info">
          <tbody>
            <tr className="first-row">
              <td className="website-label table-label">website:</td>
              <td className="website-link-col table-info">
                <a
                  href="https://www.resonate432hz.com"
                  className="website-link"
                >
                  www.resonate432hz.com
                </a>
              </td>
            </tr>
            <tr className="second-row">
              <td className="stack-label table-label">stack:</td>
              <td className="stack-info table-info">
                JavaScript, React, Html, Css
              </td>
            </tr>
            <tr className="third-row">
              <td className="api-label table-label">api's:</td>
              <td className="api-info table-info">
                web audio api, drag n drop
              </td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-ref" ref={lessonsRef}></div>

        <section className="lesson-learned-intro">
          <div className="lesson-head">
            <h2 className="mistake-title">Mistakes</h2>
            <div className="lesson-line-style"></div>
            <h2 className="lessons-learned-title">Lessons Learned</h2>
          </div>

          <h5 className="mentor-words">
            "You haven't succeed yet, because you haven't failed enough" - Ralph
            Smart
          </h5>
          <p className="gratitude">
            This quote from my mentor changed my perspective on learning, which
            helped me develop the mentality of never giving up!
          </p>
        </section>

        <section className="lessons-learned">
          <div className="step-up-design lessonCard">
            <h3 className="card-title">Stepping Up the Design</h3>
            <img
              src={cardArt1}
              alt="progression of app design"
              className="card-img-1 card-img"
            />
            <div className="card-description">
              <h6 className="card-description-head">
                First prototype was lacking in being an effective user interface
              </h6>

              <p className="bullet-1 card-bullet">A lot of unused space </p>
              <p className="bullet-2 card-bullet">
                Squished User Interactivity{" "}
              </p>
              <p className="bullet-3 card-bullet">Boring colour theme </p>
            </div>

            <Link
              to="/stepUp-design"
              onClick={() => {
                setDifferentPage(true);
              }}
            >
              <button
                className="read-more"
                onClick={() => {
                  setDifferentPage(true);
                }}
              >
                Read more
              </button>
            </Link>
          </div>
        </section>

        <section className="media-types">
          <h2 className="media-title">Mobile App Features</h2>
          <img
            src={mobileFeatures}
            alt="analysis of mobile app features"
            className="mobile-features-img"
          />
        </section>
      </div>
    </section>
  );
};

export default MusicApp;
