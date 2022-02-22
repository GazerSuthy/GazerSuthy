import React from "react";
import { useEffect } from "react";

const MobileNav = ({ setScrollTo, mobileNavActive, setMobileNavActive }) => {
  /* closes mobile navigation if user resizes window to desktop layout since navigation appears on the header */
  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth >= 1440 && mobileNavActive === true) {
        setMobileNavActive(false);
      }
    }
    // event listener fires when window has been resized "calls the function handleWindowResize"
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [mobileNavActive, setMobileNavActive]);

  return (
    <section className="mobile-nav-section">
      <nav className="mobileNav">
        <ul>
          <li
            className="mobileNav-link"
            onClick={() => {
              setScrollTo("home");
              setMobileNavActive(false);
            }}
          >
            Home
          </li>
          <li
            className="mobileNav-link"
            onClick={() => {
              setScrollTo("apps");
              setMobileNavActive(false);
            }}
          >
            Projects
          </li>
          <li
            className="mobileNav-link"
            onClick={() => {
              setScrollTo("about-me");
              setMobileNavActive(false);
            }}
          >
            About Me
          </li>
          <li
            className="mobileNav-link"
            onClick={() => {
              setScrollTo("contacts");
              setMobileNavActive(false);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MobileNav;
