import styled from "styled-components";
import HeroSection from "../Hero/HeroSection/HeroSection";
import ProjectSection from "../Project/ProjectSection/ProjectSection";
import AboutMeSection from "../AboutMe/AboutMeSection";
import ContactSection from "../Contact/ContactSection/ContactSection";
import ServicesSection from "../Service/ServicesSection/ServicesSection";

import wineDrip from "/wine-drips.svg";
import wineCornerDrip from "/wine-corner-drip.svg";

import { forwardRef } from "react";

export default forwardRef(function ContentWrapper(props, ref) {
  return (
    <StyledContentWrapper>
      <StyledOverlay>
        <div>
          <StyledCornerDrip src={wineCornerDrip} />
          <StyledTopDrip src={wineDrip} />
        </div>
        <HeroSection ref={ref} />
        <ProjectSection ref={ref} />
        <AboutMeSection ref={ref} />
        <ServicesSection ref={ref} />
        <ContactSection ref={ref} />
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
