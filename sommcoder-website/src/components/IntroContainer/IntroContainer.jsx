import styled from "styled-components";
import IntroTitle from "../IntroTitle/IntroTitle";
import IntroDescription from "../IntroDescription/IntroDescription";
import HireMeBtn from "../HireMeBtn/HireMeBtn";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroTitle />
      <IntroDescription />
      <HireMeBtn />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div``;
