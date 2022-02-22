import React, { useEffect } from "react";

//images
import firstPrototype from "../images/first-prototype.png";
import layoutPicture1 from "../images/layout-pic-1.png";
import layoutPicture2 from "../images/layout-pic-2.png";

const Lessons_design = () => {
  // scroll to top of page
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  });

  return (
    <section className="stepUp-design">
      <div className="design-container">
        <h1 className="design-head">Stepping up the design</h1>
        <div className="design-intro">
          <img
            src={firstPrototype}
            alt="first design model for resonate app"
            className="first-prototype"
          />
          <article className="design-intro-article">
            <p className="design-intro-text">
              As I was learning web developement, I was focused more on the
              behaviour rather than the design of the app. Creating the first
              prototype it became apparent that the design is the most important
              part as it deals with the user’s experience.
            </p>
            <p className="design-intro-text">
              The design is the bridge that communicates the{" "}
              <strong className="underline">
                <em>context</em>
              </strong>{" "}
              of the app to the user such as
            </p>
            <div className="bullet-points context-points">
              {/* bullet 1 */}
              <div className="bullet-container">
                <div className="bullet-design"></div>
                <p className="bullet-text">
                  <strong>what</strong> the purpose of the app is
                </p>
              </div>

              {/* bullet 2 */}
              <div className="bullet-container">
                <div className="bullet-design"></div>
                <p className="bullet-text">
                  <strong>where</strong> the app features are located
                </p>
              </div>
              {/* bullet 3 */}
              <div className="bullet-container">
                <div className="bullet-design"></div>
                <p className="bullet-text">
                  <strong>who</strong> the target audience is
                </p>
              </div>
              {/* bullet 4 */}
              <div className="bullet-container">
                <div className="bullet-design"></div>
                <p className="bullet-text">
                  <strong>How</strong> to use the app
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Level to designs */}
        <section className="design-learnings">
          <h4 className="design-learning-head">
            This realization that{" "}
            <span className="levels-design green-highlight">
              there are levels to design
            </span>{" "}
            lead me to go on a journey which introduced me to topics such as
          </h4>

          <div className="bullet-points design-learning-points">
            {/* bullet 1 */}
            <div className="bullet-container">
              <div className="bullet-design green-bullet"></div>
              <p className="bullet-text green-highlight design-fundamentals ">
                visual hiearchy
              </p>
            </div>

            {/* bullet 2 */}
            <div className="bullet-container ">
              <div className="bullet-design green-bullet"></div>
              <p className="bullet-text green-highlight design-fundamentals">
                web accessability
              </p>
            </div>
            {/* bullet 3 */}
            <div className="bullet-container">
              <div className="bullet-design green-bullet"></div>
              <p className="bullet-text  green-highlight design-fundamentals">
                usability
              </p>
            </div>
            {/* bullet 4 */}
            <div className="bullet-container">
              <div className="bullet-design green-bullet"></div>
              <p className="bullet-text green-highlight design-fundamentals">
                responsive layouts
              </p>
            </div>
            {/* bullet 5 */}
            <div className="bullet-container">
              <div className="bullet-design green-bullet"></div>
              <p className="bullet-text green-highlight design-fundamentals">
                information structure
              </p>
            </div>
          </div>
        </section>

        <section className="improvements-section">
          <h2 className="improvements-title">Improvements on design</h2>

          <div className="layout-improvement">
            <article className="layout-problem">
              <h4 className="layout-title">1. Layout</h4>
              <p className="layout-text-1 improvement-text">
                The first thing I noticed was that there was not much{" "}
                <strong className="underline">interactive space</strong> with
                the first prototype. The problem was that the design was going
                for a <span className="green-highlight">simplistic layout</span>{" "}
                however the more interactive elements I include, the more{" "}
                <span className="red-highlight">complex</span> the layout
                became.
              </p>
              <p className="layout-text-2 improvement-text">
                User interaction was limited to a small portion of the screen in
                order to perserve the simplisity of the layout
              </p>
            </article>
            <aside className="layout-picture-1">
              <img
                src={layoutPicture1}
                alt="shows layout problems of the first prototype design"
                className="layout-img-1"
              />
            </aside>

            <article className="layout-solution">
              <h4 className="solution-title green-highlight">Solution</h4>
              <p className="solution-text improvement-text">
                Researching other web players such as Spotify and Tidal,
                inspired me to <span className="green-highlight">split</span> my
                first design into <span className="underline">two parts</span>.
              </p>

              {/* Solution Bullet Point*/}
              <div className="bullet-points layout-solution-points">
                <div className="bullet-container">
                  <div className="bullet-design"></div>
                  <p className="bullet-text">
                    The App mode which focuses on{" "}
                    <span className="greenhighlight">optimizing space</span> for
                    user interactivity
                  </p>
                </div>
                <div className="bullet-container">
                  <div className="bullet-design"></div>
                  <p className="bullet-text">
                    The fullscreen mode that displays the song information with
                    focus on a{" "}
                    <span className="greenhighlight">simplistic layout</span>
                  </p>
                </div>
              </div>
            </article>

            <aside className="layout-picture-2">
              <img
                src={layoutPicture2}
                alt="shows solutions to the layout problems"
                className="layout-img-2"
              />
            </aside>
          </div>

          {/* Visual improvements */}
          {/* <div className="visual-improvement">
            <article className="visual-problem">
              <h4 className="layout-title">2. Colour and Theme</h4>
              <p className="visual-text-1 improvement-text">
                Learning that colour has a psychological effects on your
                emotional state made me realize that I could use the combination
                of colour visuals and audio frequency such as 432hz to bring the
                user into a relaxed meditative state.
              </p>
            </article>

            <article className="layout-solution">
              <p className="solution-text improvement-text">
                <span className="green-highlight">Symbolism</span> influced the
                choice of vibrant colours which makes Resonate stand out from
                other webplayers
              </p>
            </article>

            <aside className="colour-picture-1">
              <img
                src={colourPicture1}
                alt="showcases colour usage in app design"
                className="colour-theme-pic"
              />
            </aside>
          </div>
          */}
        </section>
      </div>
    </section>
  );
};

export default Lessons_design;
