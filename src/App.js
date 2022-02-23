import "./App.css";
import { useState, useEffect, useRef } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Header from "./components/header";
import Hero from "./components/hero";
import Abilities from "./components/abilities";
import MusicApp from "./components/musicApp";
import AboutMe from "./components/aboutMe";
import WebApps from "./components/webApps";
import MobileNav from "./components/mobile-nav";
import LessonsDesign from "./components/lessons_design";
import Contact from "./components/contact";

function App() {
  /* // nav link refs
  const homeLinkRef = useRef(null);
  const projectLinkRef = useRef(null);
  const aboutLinkRef = useRef(null); 

  // observer section refs
  // const projectSectionRef = useRef(null);

  // implementing intersection observer {Work in Progress!!}
  const highlightActiveNav = (entries) => {
    // this is where we do stuff
    const [entry] = entries;

    if (entry.isIntersecting) {
      // homeLinkRef.current.classList.remove("nav-link-active");
      // projectLinkRef.current.classList.add("nav-link-active");
    }
  }; 

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(highlightActiveNav, options);
    // if appsRef is rendered in, observe it
    console.log(projectSectionRef.current);
    if (projectSectionRef.current) {
      observer.observe(projectSectionRef.current);
    }
  }); */

  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [differentPage, setDifferentPage] = useState(false);

  /* =======================
    Handles Auto Scrolling
  ==========================*/
  const [scrollTo, setScrollTo] = useState("");
  const appsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const lessonsRef = useRef(null);
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
  const scrollToLessons = () => {
    lessonsRef.current.scrollIntoView({ behavior: "smooth" });
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
    } else if (scrollTo === "lessons") {
      scrollToLessons();
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
          /* // nav link refs
          homeLinkRef={homeLinkRef}
          projectLinkRef={projectLinkRef}
          aboutLinkRef={aboutLinkRef} */
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
          <Route path="/stepUp-design">
            <LessonsDesign></LessonsDesign>
          </Route>
          <Route path="/">
            <Hero></Hero>
            <Abilities appsRef={appsRef}></Abilities>
            <MusicApp
              // projectSectionRef={projectSectionRef}
              lessonsRef={lessonsRef}
              setDifferentPage={setDifferentPage}
            ></MusicApp>
            <WebApps aboutMeRef={aboutMeRef}></WebApps>
            <AboutMe></AboutMe>
            <Contact contactRef={contactRef}></Contact>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
