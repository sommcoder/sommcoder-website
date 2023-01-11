import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import IntroImage from "../IntroImage/IntroImage";
import HireMeBtn from "../HireMeBtn/HireMeBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

import wineDrip from "../../assets/wine-drips.svg";
import wineDrip2 from "../../assets/wine-drips2.svg";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <img
        style={{
          height: "100px",
          width: "100px",
          transform: "rotateX(180deg)",
          "grid-column": "span 2",
          "justify-self": "center",
          "align-self": "center",
          "margin-left": "7.5rem",
        }}
        src={wineDrip}
      />
      <IntroHeader />
      <IntroImage />
      <IntroDescription />
      <img
        style={{
          height: "100px",
          width: "100px",
          transform: "rotateX(180deg)",
        }}
        src={wineDrip2}
      />
      <HireMeBtn />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  padding: 1rem 2rem 2rem 2rem;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  @media (max-width: 475px) {
    row-gap: 1.5rem;
  }
`;
