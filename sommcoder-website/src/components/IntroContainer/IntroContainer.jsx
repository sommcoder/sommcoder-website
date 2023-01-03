import styled from "styled-components";
import IntroTitle from "../IntroTitle/IntroTitle";
import IntroDescription from "../IntroDescription/IntroDescription";
import IntroImage from "../IntroImage/IntroImage";
import HireMeBtn from "../HireMeBtn/HireMeBtn";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroTitle />
      <IntroImage />
      <IntroDescription />
      <HireMeBtn />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  border: 1px solid white;
  min-height: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
