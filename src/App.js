import "./App.css";
import { useState, useEffect, useRef } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Header from "./components/header";
import Hero from "./components/hero";
import Abilities from "./components/abilities";
import MusicApp from "./components/musicApp";
import AboutMe from "./components/aboutMe";
import ClientBuilds from "./components/clientBuilds";
import MobileNav from "./components/mobile-nav";
import Contact from "./components/contact";
import ViewProcess from "./components/perfectUniverse";
import ContactForm from "./components/contact-form";

function App() {
  // nav link refs
  const homeLinkRef = useRef(null);
  const projectLinkRef = useRef(null);
  const aboutLinkRef = useRef(null);

  // observer section refs
  const homeSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  // implementing intersection observer {Work in Progress!!}
  const highlightActiveNav = (entries) => {
    const [entry] = entries;

    // if the observer is over the hero section, only highlight the home navbar link
    if (entry.target.className === "hero-wrapper" && entry.isIntersecting) {
      homeLinkRef.current.classList.add("nav-link-active");
      projectLinkRef.current.classList.remove("nav-link-active");
      aboutLinkRef.current.classList.remove("nav-link-active");
    }

    // if the observer is over the project section, only highlight the project navbar link
    if (entry.target.className === "project-section" && entry.isIntersecting) {
      projectLinkRef.current.classList.add("nav-link-active");
      homeLinkRef.current.classList.remove("nav-link-active");
      aboutLinkRef.current.classList.remove("nav-link-active");
    }

    // if the observer is over the about me section, only highlight the about navbar link
    if (entry.target.className === "about-me" && entry.isIntersecting) {
      aboutLinkRef.current.classList.add("nav-link-active");
      homeLinkRef.current.classList.remove("nav-link-active");
      projectLinkRef.current.classList.remove("nav-link-active");
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    // was not intersecting because my threshold was 1, threshold refers to the percentage the element has to be on the screen for it to intersect
    // threshold of 1 means the whole element has to be on the viewport in order for it to intersect
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(highlightActiveNav, options);
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (projectSectionRef.current) {
      observer.observe(projectSectionRef.current);
    }
    if (homeSectionRef.current) {
      observer.observe(homeSectionRef.current);
    }
  });

  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [differentPage, setDifferentPage] = useState(false);

  /* =======================
    Handles Auto Scrolling
  ==========================*/
  const [scrollTo, setScrollTo] = useState("");
  const appsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // scroll functions
  const scrollToHome = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const scrollToApps = () => {
    appsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollTo === "home") {
      scrollToHome();
      setScrollTo("");
    } else if (scrollTo === "apps") {
      scrollToApps();
      setScrollTo("");
    } else if (scrollTo === "about-me") {
      scrollToAboutMe();
      setScrollTo("");
    } else if (scrollTo === "projects") {
      scrollToProjects();
      setScrollTo();
    } else if (scrollTo === "contacts") {
      scrollToContact();
      setScrollTo();
    }
  }, [scrollTo]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          mobileNavActive={mobileNavActive}
          setMobileNavActive={setMobileNavActive}
          setScrollTo={setScrollTo}
          differentPage={differentPage}
          setDifferentPage={setDifferentPage}
          // nav link refs
          homeLinkRef={homeLinkRef}
          projectLinkRef={projectLinkRef}
          aboutLinkRef={aboutLinkRef}
        ></Header>
        {mobileNavActive === true ? (
          <MobileNav
            setScrollTo={setScrollTo}
            setMobileNavActive={setMobileNavActive}
            mobileNavActive={mobileNavActive}
          ></MobileNav>
        ) : (
          ""
        )}
        <Switch>
          <Route path="/perfectUniverse">
            <ViewProcess></ViewProcess>
          </Route>
          <Route path="/">
            <Hero homeSectionRef={homeSectionRef}></Hero>
            <Abilities appsRef={appsRef}></Abilities>
            <MusicApp></MusicApp>
            <ClientBuilds
              projectRef={projectRef}
              aboutMeRef={aboutMeRef}
              setDifferentPage={setDifferentPage}
              setScrollTo={setScrollTo}
            ></ClientBuilds>
            <AboutMe aboutSectionRef={aboutSectionRef}></AboutMe>
            <Contact contactRef={contactRef}></Contact>
            <ContactForm></ContactForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
