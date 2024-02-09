import styled from "styled-components";
import HeroSection from "../Hero/HeroSection/HeroSection";
import ProjectSection from "../Project/ProjectSection/ProjectSection";
import AboutMeSection from "../AboutMe/AboutMeSection";
import ContactSection from "../Contact/ContactSection/ContactSection";
import ServicesSection from "../Service/ServiceSection/ServiceSection";

import wineDrip from "/wine-drips.svg";
import wineCornerDrip from "/wine-corner-drip.svg";

import { forwardRef } from "react";

export default forwardRef(function ContentWrapper(props, ref) {
  return (
    <StyledContentWrapper>
      <StyledOverlay>
        <div className="wine-stain-container">
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

  .wine-stain-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
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
