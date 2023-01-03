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
  grid-template-columns: 5% 40% 55%;
  max-width: 100%;
  min-height: 350px;
  padding: 0.5rem;
`;
