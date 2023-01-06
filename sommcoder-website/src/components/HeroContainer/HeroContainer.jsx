import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import IntroContainer from "../IntroContainer/IntroContainer";
import HeroGraphic from "../HeroGraphic/HeroGraphic";

export default function HeroContainer() {
  return (
    <StyledHeroContainer>
      <SideBar />
      <IntroContainer />
      <HeroGraphic />
    </StyledHeroContainer>
  );
}
const StyledHeroContainer = styled.main`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 15% 85%;
  max-width: 100%;
  min-height: 350px;
  padding: 0.5rem;

  @media (min-width: 700px) {
    grid-template-columns: 10% 50% 40%;
  }

  // we should only generate the hero-graphic for Desktop, maybe find an alternative smaller image for mobile
  // min-width is a mobile first approach!!
`;
