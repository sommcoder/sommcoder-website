import styled from "styled-components";
import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselContainer from "../CarouselContainer/CarouselContainer";

import { forwardRef } from "react";

import { Suspense } from "react";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

export default forwardRef(function ProjectSection({ refStateObj }, ref) {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledProjectSection
        ref={refStateObj.project}
        className="content-section"
      >
        <StyledProjectOverlay>
          <CarouselArrowLeft />
          <CarouselContainer />
          <CarouselArrowRight />
        </StyledProjectOverlay>
      </StyledProjectSection>
    </Suspense>
  );
});

const StyledProjectSection = styled.section`
  border-top: 0.1rem solid grey;
  border-bottom: 0.1rem solid grey;
  box-shadow: inset 2rem 3rem 3rem rgb(80, 104, 84);
  background-image: linear-gradient(to top, transparent, 90%, #837960),
    linear-gradient(to bottom, transparent, 90%, #837960),
    url("/code image.png");
`;

const StyledProjectOverlay = styled.div`
  background-color: rgba(80, 70, 92, 0.4);
  height: fit-content;
  min-width: inherit;
  max-width: inherit;
  min-height: 30rem;
  padding: 4rem 0rem;
  justify-self: center;
  align-self: center;
  display: block;
`;
