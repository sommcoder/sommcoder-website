import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import HeroSection from "../HeroSection/HeroSection";
export default function MainSection() {
  return (
    <StyledMainSection>
      <SideBar />
      <HeroSection />
    </StyledMainSection>
  );
}
const StyledMainSection = styled.main`
  display: grid;
  grid-template-columns: auto auto;
`;
