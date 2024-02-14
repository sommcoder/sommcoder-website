import styled from "styled-components";
import IntroContainer from "../IntroContainer/IntroContainer";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { Suspense } from "react";
import { forwardRef } from "react";

export default forwardRef(function HeroSection({ refStateObj }, ref) {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledHeroSection ref={refStateObj.main}>
        <span className="side-wine-splat left"></span>
        <IntroContainer />
        <span className="side-wine-splat right"></span>
      </StyledHeroSection>
    </Suspense>
  );
});

const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  justify-self: center;
  min-height: 35rem;
  width: 100%;
  z-index: 1;
  opacity: 1;
  // TODO: this isn't working but I want the hero section and each section for that matter to render in smoothly. Background and overlays should generate first and then the components should smoothly appear
  transition: opacity 500ms ease-in;

  // allows room for the HeroGraphic component:
  grid-template-columns: auto auto auto;

  .side-wine-splat {
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    background-image: url("/Wine Splatter.svg");
  }

  .right {
    transform: none;
  }
`;
