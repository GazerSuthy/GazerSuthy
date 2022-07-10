import React from "react";
import GazerSuthy from "../images/profile-picture.png";

const ContactForm = () => {
  return (
    <section className="user-form">
      {/* Introduction to submit form */}
      <div className="intro-message-wrapper">
        <img
          src={GazerSuthy}
          alt="suthashan dressed up"
          className="intro-form-pic"
        />
        <h2 className="intro-message">Let's build something great together</h2>
        <h5 className="promise-message">
          (You will hear back from me in 24 hours)
        </h5>
      </div>

      <form action="webform.php" method="POST" className="submit-user-info">
        {/* Personal Info */}
        <div className="get-to-know-message-container">
          <h6 className="get-to-know-message">Help me to get to know you.</h6>
        </div>
        {/* each name attribute for inputs should be unique cause they become the php variables */}
        <section className="get-to-know-form">
          <div className="form-row-1">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="first name"
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="last name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <input
            type="tel"
            name="phone-num"
            id="phone-num"
            placeholder="phone number (optional)"
          />
        </section>
        {/* Budget Info */}
        <div className="get-to-know-message-container">
          <h6 className="get-to-know-message">What budget range are you in?</h6>
        </div>
        <section className="budget-range">
          <label htmlFor="price-range-1" className="first-range form-option">
            <input
              type="radio"
              className="form-cirle"
              name="budget-option-1"
              id="price-range-1"
            />
            {"   "}
            $1,000 - $2,500
          </label>
          <label htmlFor="price-range-2" className="second-range form-option">
            <input
              type="radio"
              className="form-cirle"
              name="budget-option-2"
              id="price-range-2"
            />
            {"   "}
            $2,500 - $5,000
          </label>
          <label htmlFor="price-range-3" className="third-range form-option">
            <input
              type="radio"
              className="form-cirle"
              name="budget-option-3"
              id="price-range-3"
            />
            {"   "}
            $5,000 - $7,500
          </label>
          <label htmlFor="price-range-4" className="fourth-range form-option">
            <input
              type="radio"
              className="form-cirle"
              name="budget-option-4"
              id="price-range-4"
            />
            {"   "}
            $7,500 - $10,000
          </label>
        </section>
        {/* Project Info */}
        <div className="get-to-know-message-container">
          <h6 className="get-to-know-message">
            Tell me more about the project.
          </h6>
        </div>
        <section className="project-info">
          <select name="timeline" id="timeline">
            <option value="" disabled selected hidden>
              Timeline
            </option>
            <option value="ASAP">ASAP</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
            <option value="Ongoing">Ongoing</option>
          </select>

          <textarea
            name="user-message"
            id="user-message"
            rows="11"
            placeholder="Hello, I'm looking for a web professional to help me out with..."
          ></textarea>
        </section>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
