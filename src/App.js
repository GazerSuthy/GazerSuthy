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
              lessonsRef={lessonsRef}
              setDifferentPage={setDifferentPage}
            ></MusicApp>
            <WebApps aboutMeRef={aboutMeRef}></WebApps>
            <AboutMe></AboutMe>
            <Contact contactRef={contactRef}></Contact>
          </Route>
        </Switch>
        {/* <Header></Header>
         */}

        {/* <MobileNav></MobileNav> */}
        {/* <div className="page">
        <Hero></Hero>
        <Abilities></Abilities>
        <Resonate passedRef={appsRef}></Resonate>
        <Websites passedRef={websitesRef}></Websites>
      </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
