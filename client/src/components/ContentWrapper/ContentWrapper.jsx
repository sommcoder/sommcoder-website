import styled from "styled-components";
import HeroSection from "../Main/HeroSection/HeroSection";
import ProjectSection from "../Project/ProjectSection/ProjectSection";

export default function ContentWrapper() {
  return (
    <StyledContentWrapper>
      <StyledOverlay>
        <HeroSection />
        <ProjectSection />
      </StyledOverlay>
    </StyledContentWrapper>
  );
}

const StyledContentWrapper = styled.main`
  display: block;
  width: 100%;
  background-image: url("../../../../public/hero-texture.jpg");
`;

const StyledOverlay = styled.div`
  background-color: rgba(80, 104, 84, 0.8);
  z-index: 3;
  height: 100%;
  width: 100%;
  padding: 1rem 0rem;
  height: auto;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr;
`;
