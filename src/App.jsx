import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import wineDrip from "/wine-drips.svg";
import wineCornerDrip from "/wine-corner-drip.svg";

import * as Section from "./components/index.js";

import { useRef, useState } from "react";

export default function App() {
  // mobile overlay menu switch:
  // can be closed to switch or user clicks somewhere other than OverlaySection
  // ! "init", "open", "closed" states:
  const [mobileMenu, toggleMobileMenu] = useState("init");
  // header's hamburger menu animation switch:
  // middle line EXITS then triggers toggleOverlayAnimation
  // Overlay list items CANNOT be clicked until this completes:
  const [headerAnimation, toggleHeaderAnimation] = useState(false); // true: complete, false: incomplete
  // overlay's reference line animation switch:
  // line enters on TRUE and exists on FALSE
  // hamburger menu CANNOT be clicked until this completes:
  const [overlayAnimation, toggleOverlayAnimation] = useState(false); // true: complete, false: incomplete

  const refStateObj = {
    main: useRef(null),
    project: useRef(null),
    about: useRef(null),
    service: useRef(null),
    contact: useRef(null),
  };
  const navLabelArr = Object.keys(refStateObj);

  console.log("headerAnimation TRIGGERED:", headerAnimation);
  return (
    <>
      <GlobalStyles />
      <StyledApp className="App">
        <Section.Header
          navLabelArr={navLabelArr}
          mobileMenu={mobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          headerAnimation={headerAnimation}
          toggleHeaderAnimation={toggleHeaderAnimation}
          overlayAnimation={overlayAnimation}
          toggleOverlayAnimation={toggleOverlayAnimation}
        />
        <Section.Overlay
          refStateObj={refStateObj}
          mobileMenu={mobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          navLabelArr={navLabelArr}
          headerAnimation={headerAnimation}
          toggleHeaderAnimation={toggleHeaderAnimation}
          overlayAnimation={overlayAnimation}
          toggleOverlayAnimation={toggleOverlayAnimation}
        />
        <StyledContentWrapper>
          <StyledContentOverlay>
            <div className="wine-stain-container">
              <StyledCornerDrip src={wineCornerDrip} />
              <StyledTopDrip src={wineDrip} />
            </div>
            <Section.Hero refStateObj={refStateObj} />
            <Section.Project refStateObj={refStateObj} />
            <Section.AboutMe refStateObj={refStateObj} />
            <Section.Service refStateObj={refStateObj} />
            <Section.Contact refStateObj={refStateObj} />
          </StyledContentOverlay>
        </StyledContentWrapper>
        <Section.Footer refStateObj={refStateObj} navLabelArr={navLabelArr} />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  position: relative;
  display: grid;
  min-width: 32rem;
  max-width: 100%;
  grid-template-rows: 6rem auto auto;
`;

const StyledContentWrapper = styled.main`
  min-width: inherit;
  max-width: inherit;
  height: 100%;
  display: block;
  background-image: url("/hero-texture.jpg");

  .wine-stain-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledContentOverlay = styled.div`
  height: 100%;
  min-width: inherit;
  max-width: inherit;
  background-color: rgba(80, 104, 84, 0.8);
  z-index: 3;
  height: auto;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr;
`;

const StyledCornerDrip = styled.img`
  display: inline;
  height: 10.05rem;
  width: 10.05rem;
  grid-column: span 1;
  align-self: baseline;
`;

const StyledTopDrip = styled.img`
  height: 10rem;
  width: 10rem;
  display: inline;
  align-self: center;
  justify-content: center;
  justify-self: center;
  transform: rotateX(180deg);
`;
