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
  position: relative;
  display: grid;
  justify-self: center;
  width: 100%;
  min-height: 350px;
  z-index: 1;
  padding-bottom: 2rem;

  // desktop:
  @media (min-width: 850px) {
    grid-template-columns: 60% 40%;
    margin-top: 0rem;
  }
`;
