import styled from "styled-components";
import IntroContainer from "../IntroContainer/IntroContainer";
import HeroGraphic from "../HeroGraphic/HeroGraphic";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { Suspense } from "react";

export default function HeroSection() {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledHeroSection>
        <IntroContainer />
        <HeroGraphic />
      </StyledHeroSection>
    </Suspense>
  );
}
const StyledHeroSection = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  max-width: 1280px;
  min-height: 350px;

  margin: 1rem 1rem 0rem 1rem;

  @media (min-width: 850px) {
    grid-template-columns: 60% 40%;
    margin-top: 0rem;
  }

  // we should only generate the hero-graphic for Desktop, maybe find an alternative smaller image for mobile
  // min-width is a mobile first approach!!
`;
