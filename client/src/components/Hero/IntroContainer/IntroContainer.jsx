import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import ContactBtn from "../ContactBtn/ContactBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

import wineDrip2 from "/wine-drips2.svg";

import { lazy } from "react";

const IntroImage = lazy(() => import("../IntroImage/IntroImage"));

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroHeader />
      <IntroImage headshot="headshot" />
      <IntroDescription />
      <StyledFooterSection>
        <ContactBtn />
        <StyledBottomDrip src={wineDrip2} />
      </StyledFooterSection>
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  padding: 0 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;
  img {
    height: 90%;
    width: 90%;
  }

  @media (min-width: 40rem) {
    padding-left: 4rem;
    row-gap: 1rem;
  }
`;

const StyledFooterSection = styled.div`
  grid-column: span 3; // takes up two columns of its parent
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (min-width: 50rem) {
    align-items: center;
  }
`;

// specified a styled component to not get it mixed up with the above img
const StyledBottomDrip = styled.img`
  display: inline;
  align-self: baseline;
  justify-self: right;
  min-height: 5rem;
  min-width: 8rem;
  max-width: 10rem;
  transform: rotateX(180deg);
`;
