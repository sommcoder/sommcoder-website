import styled from "styled-components";
import IntroContainer from "../IntroContainer/IntroContainer";
import HeroGraphic from "../HeroGraphic/HeroGraphic";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { Suspense } from "react";
import { forwardRef } from "react";

export default forwardRef(function HeroSection(props, ref) {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledHeroSection ref={ref.main}>
        <IntroContainer />
        <HeroGraphic />
      </StyledHeroSection>
    </Suspense>
  );
});
const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  justify-self: center;
  min-width: inherit;
  max-width: 130rem;
  min-height: 35rem;
  z-index: 1;
  padding-bottom: 5rem;
  opacity: 1;
  transition: opacity 0 0.75s ease-in; // TODO: this isn't working but I want the hero section and each section for that matter to render in smoothly. Background and overlays should generate first and then the components should smoothly appear
  // allows room for the HeroGraphic component:
  @media (min-width: 85rem) {
    grid-template-columns: 60% 40%;
  }
`;
