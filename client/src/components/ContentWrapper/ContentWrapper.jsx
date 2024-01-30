import styled from "styled-components";
import HeroSection from "../Main/HeroSection/HeroSection";
import ProjectSection from "../Project/ProjectSection/ProjectSection";
import AboutMeSection from "../AboutMe/AboutMeSection";

import wineDrip from "/wine-drips.svg";
import wineCornerDrip from "/wine-corner-drip.svg";

export default function ContentWrapper() {
  return (
    <StyledContentWrapper>
      <StyledOverlay>
        <div>
          <StyledCornerDrip src={wineCornerDrip} />
          <StyledTopDrip src={wineDrip} />
        </div>
        <HeroSection />
        <ProjectSection />
        <AboutMeSection />
      </StyledOverlay>
    </StyledContentWrapper>
  );
}

const StyledContentWrapper = styled.main`
  display: block;
  width: 100%;
  background-image: url("/hero-texture.jpg");
`;

const StyledOverlay = styled.div`
  background-color: rgba(80, 104, 84, 0.8);
  z-index: 3;
  height: 100%;
  width: 100%;
  padding: 0rem 0rem;
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
  display: inline;
  height: 10rem;
  width: 10rem;
  transform: rotateX(180deg);
  justify-self: baseline;
  margin-left: 20rem;
`;
