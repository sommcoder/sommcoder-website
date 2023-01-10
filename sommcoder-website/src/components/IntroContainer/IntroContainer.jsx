import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import IntroImage from "../IntroImage/IntroImage";
import HireMeBtn from "../HireMeBtn/HireMeBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroHeader />
      <IntroImage />
      <IntroDescription />
      <HireMeBtn />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  @media (max-width: 475px) {
    row-gap: 1.5rem;
  }
`;
