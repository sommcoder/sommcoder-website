import styled from "styled-components";
import HeroSection from "../Hero/HeroSection/HeroSection";
import ProjectSection from "../Project/ProjectSection/ProjectSection";
import AboutMeSection from "../AboutMe/AboutMeSection";
import ContactSection from "../Contact/ContactSection/ContactSection";

import wineDrip from "/wine-drips.svg";
import wineCornerDrip from "/wine-corner-drip.svg";

import { useRef } from "react";
import { forwardRef } from "react";

export default forwardRef(function ContentWrapper(ref) {
  const heroRef = useRef();
  const ProjectRef = useRef();
  const AboutRef = useRef();
  const ContactRef = useRef();

  //TODO: trying to move the 4 refs up to App and then pass the refs down to Footer and eventually the HamburgerModal so that the menu click can bring the user to the right coordinates on the page to view that particular element/section

  return (
    <StyledContentWrapper>
      <StyledOverlay>
        <div>
          <StyledCornerDrip src={wineCornerDrip} />
          <StyledTopDrip src={wineDrip} />
        </div>
        <HeroSection ref={heroRef} />
        <ProjectSection ref={ProjectRef} />
        <AboutMeSection ref={AboutRef} />
        <ContactSection ref={ContactRef} />
      </StyledOverlay>
    </StyledContentWrapper>
  );
});

const StyledContentWrapper = styled.main`
  min-width: inherit;
  max-width: inherit;
  height: 100%;
  display: block;
  background-image: url("/hero-texture.jpg");
`;

const StyledOverlay = styled.div`
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
  margin-bottom: 4.25rem;
`;

const StyledTopDrip = styled.img`
  display: none;
  @media (min-width: 400px) {
    display: inline;
    height: 10rem;
    width: 10rem;
    transform: rotateX(180deg);
    justify-self: baseline;
    margin-left: 20rem;
  }
`;
