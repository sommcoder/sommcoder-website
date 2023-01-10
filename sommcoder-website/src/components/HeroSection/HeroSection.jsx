import styled from "styled-components";
import IntroContainer from "../IntroContainer/IntroContainer";
import HeroGraphic from "../HeroGraphic/HeroGraphic";

export default function HeroSection() {
  return (
    <StyledHeroSection>
      <IntroContainer />
      <HeroGraphic />
    </StyledHeroSection>
  );
}
const StyledHeroSection = styled.span`
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  max-width: 1280px;
  min-height: 350px;
  padding: 0.5rem;
  margin: 2rem 1rem;

  @media (min-width: 850px) {
    grid-template-columns: 60% 40%;
    margin-top: 5rem;
  }

  // we should only generate the hero-graphic for Desktop, maybe find an alternative smaller image for mobile
  // min-width is a mobile first approach!!
`;
