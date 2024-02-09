import styled from "styled-components";
import IntroContainer from "../IntroContainer/IntroContainer";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { Suspense } from "react";
import { forwardRef } from "react";

export default forwardRef(function HeroSection({ refStateObj }, ref) {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledHeroSection ref={refStateObj.main}>
        <IntroContainer />
      </StyledHeroSection>
    </Suspense>
  );
});
const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  justify-self: center;
  min-width: inherit;
  max-width: 100rem;
  min-height: 35rem;
  z-index: 1;
  padding-bottom: 5rem;
  opacity: 1;
  transition: opacity 0 0.75s ease-in;
  // TODO: this isn't working but I want the hero section and each section for that matter to render in smoothly. Background and overlays should generate first and then the components should smoothly appear
  // allows room for the HeroGraphic component:
  grid-template-columns: 1fr;
`;
