import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
// import IntroImage from "../IntroImage/IntroImage";
import ContactBtn from "../ContactBtn/ContactBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

import wineDrip from "../../../assets/images/wine-drips.svg";
import wineDrip2 from "../../../assets/images/wine-drips2.svg";

import { lazy } from "react";

const IntroImage = lazy(() => import("../IntroImage/IntroImage"));

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <img
        style={{
          "max-height": "100px",
          "max-width": "100px",
          transform: "rotateX(180deg)",
          "grid-column": "span 2",
          "justify-self": "center",
          "align-self": "center",
          "margin-left": "7.5rem",
        }}
        src={wineDrip}
      />
      <IntroHeader />
      <IntroImage headshot="headshot" />
      <IntroDescription />
      <div
        style={{
          "grid-column": "span 2",
          display: "grid",
          "grid-template-columns": "1fr 1fr 1fr",
        }}
      >
        <img
          style={{
            "max-height": "100px",
            "max-width": "100px",
            transform: "rotateX(180deg)",
          }}
          src={wineDrip2}
        />
        <ContactBtn />
      </div>
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

    img {
      height: 90%;
      width: 90%;
    }
  }
`;
