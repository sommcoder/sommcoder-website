﻿import styled from "styled-components";
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
const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  justify-self: center;
  width: 100%;
  min-height: 350px;
  z-index: 1;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  opacity: 1;
  transition: opacity 0 0.75s ease-in; // TODO: this isn't working but I want the hero section and each section for that matter to render in smoothly. Background and overlays should generate first and then the components should smoothly appear

  // desktop:
  @media (min-width: 850px) {
    grid-template-columns: 60% 40%;
    margin-top: 0rem;
    padding-right: 0rem;
  }
`;
