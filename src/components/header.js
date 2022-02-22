import React from "react";
import logo from "../images/logo.png";

import { Icon } from "@iconify/react";
import hamburgerButton from "@iconify/icons-icon-park-outline/hamburger-button";

import { Link } from "react-router-dom";

const Header = ({
  setScrollTo,
  setMobileNavActive,
  mobileNavActive,
  differentPage,
  setDifferentPage,
}) => {
  return (
    <header className="header-wrapper">
      <div className="header-container container">
        <section
          className="logo-container"
          onClick={() => {
            setScrollTo("home");
          }}
        >
          <img
            src={logo}
            alt="website logo which consists of a diamond within the sun"
            className="logo"
          />
          <h1 className="logo-text">GazerSuthy</h1>
        </section>
        {/* navigation */}

        {/* if user on mobile and on different page, he will have a back menu, if on main page he will have hamburger menu for ux purposes */}
        {differentPage === true ? (
          // Custom back navigation {when on different page}
          <nav className="back-nav">
            <ul>
              <Link to="/">
                <li
                  className="nav-link-container project-links "
                  onClick={() => {
                    setScrollTo("lessons");
                    setDifferentPage(false);
                  }}
                >
                  <p className="nav-link nav-link-active">Back</p>
                </li>
              </Link>
            </ul>
          </nav>
        ) : (
          <Icon
            icon={hamburgerButton}
            className="hamburger-icon"
            onClick={() => {
              setMobileNavActive(!mobileNavActive);
            }}
          ></Icon>
        )}

        {/* if user on desktop and on different page, nav will only show back menu*/}
        {differentPage === true ? (
          <nav className="header-nav">
            <ul>
              <Link to="/">
                <li
                  className="nav-link-container project-links "
                  onClick={() => {
                    setScrollTo("lessons");
                    setDifferentPage(false);
                  }}
                >
                  <p className="nav-link nav-link-active">Back</p>
                </li>
              </Link>
            </ul>
          </nav>
        ) : (
          <nav className="header-nav">
            <ul>
              <li
                className="nav-link-container project-links "
                onClick={() => setScrollTo("home")}
              >
                <p className="nav-link nav-link-active">Home</p>
              </li>
              <li
                className="nav-link-container project-links "
                onClick={() => setScrollTo("apps")}
              >
                <p className="nav-link nav-link-active">Projects</p>
              </li>
              <li
                className="nav-link-container about-me-link"
                onClick={() => setScrollTo("about-me")}
              >
                <p className="nav-link">About Me</p>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
