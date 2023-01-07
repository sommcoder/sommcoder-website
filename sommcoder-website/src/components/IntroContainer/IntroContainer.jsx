import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import IntroImage from "../IntroImage/IntroImage";
import HireMeBtn from "../HireMeBtn/HireMeBtn";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroImage />
      <IntroDescription />
      <HireMeBtn />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  padding: 2rem;
`;
