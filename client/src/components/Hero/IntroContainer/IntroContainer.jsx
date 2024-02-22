import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import ContactBtn from "../ContactBtn/ContactBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

import wineDrip2 from "/wine-drips2.svg";

import { lazy } from "react";

const IntroImage = lazy(() => import("../IntroImage/IntroImage"));

export default function IntroContainer() {
  // TODO: would look better to have the footer drip graphic align with the introImage component
  return (
    <StyledIntroContainer>
      <IntroHeader />
      <IntroDescription />
      <IntroImage headshot="headshot" />

      <ContactBtn />
      <StyledBottomDrip src={wineDrip2} />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  justify-self: center;
  margin: 0rem 2.5rem 1rem 2.5rem;
  grid-template-columns: repeat(3, auto);
  // 4 rows on mobile:
  grid-template-rows: repeat(4, auto);
  max-width: 95rem;

  img {
    height: 90%;
    width: 90%;
  }

  // 480px
  @media (min-width: 30rem) {
    margin: 0 5rem;
    grid-template-rows: repeat(3, auto);
  }
`;

// specified a styled component to not get it mixed up with the above img
const StyledBottomDrip = styled.img`
  display: inline;
  min-height: 5rem;
  min-width: 8rem;
  max-width: 10rem;
  transform: rotateX(180deg);
  align-self: baseline;
  justify-self: left;
  grid-row: 3;
  grid-column: 2 / span 2;
  // 480px
  @media (min-width: 30rem) {
    justify-self: right;
  }
`;
