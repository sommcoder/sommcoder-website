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
        <StyledBottomDrip src={wineDrip2} />
        <ContactBtn />
      </StyledFooterSection>
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  padding-left: 4rem;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  @media (max-width: 47.5rem) {
    row-gap: 1.5rem;

    img {
      height: 90%;
      width: 90%;
    }
  }
`;

const StyledFooterSection = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledBottomDrip = styled.img`
  max-height: 10rem;
  max-width: 10rem;
  transform: rotateX(180deg);
`;
