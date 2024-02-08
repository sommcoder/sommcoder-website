﻿import styled from "styled-components";
import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselContainer from "../CarouselContainer/CarouselContainer";

import { forwardRef } from "react";

// import { Suspense } from "react";
// import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

export default forwardRef(function ProjectSection(props, ref) {
  return (
    // <Suspense fallback={<LoadingEllipsis />}>
    <StyledProjectSection ref={ref.project}>
      <StyledProjectOverlay>
        <CarouselArrowLeft />
        <CarouselContainer />
        <CarouselArrowRight />
      </StyledProjectOverlay>
    </StyledProjectSection>
    /* </Suspense> */
  );
});

const StyledProjectSection = styled.section`
  justify-self: center;
  /* min-width: inherit; // why does inherit do weird stuff here?
  max-width: inherit; */
  width: 100%;
  height: fit-content;
  border-top: 0.1rem solid grey;
  border-bottom: 0.1rem solid grey;
  box-shadow: inset 2rem 3rem 3rem rgb(80, 104, 84);
  background-image: linear-gradient(to top, transparent, 90%, #837960),
    linear-gradient(to bottom, transparent, 90%, #837960),
    url("/code image.png");
  /* animation: spin 2s 0s 0s infinite linear fill-mode; */

  /* @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  } */
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

  /* @media (min-width: 60rem) {
    grid-template-rows: 1fr 1fr;
  } */
`;

// const StyledProjectSectionTitle = styled.div`
//   margin: 0 auto;
//   text-align: center;
//   background-color: rgba(255, 255, 255, 0.199);
//   height: 6rem;
//   display: flex;
//   width: 40rem;
//   border-radius: 1.5rem;
//   justify-content: center;
//   align-items: center;
//   .project-section-title {
//     font-size: 3rem;
//   }
// `;
