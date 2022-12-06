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
const StyledHeroContainer = styled.main``;
