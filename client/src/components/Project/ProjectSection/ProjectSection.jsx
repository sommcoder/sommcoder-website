import styled from "styled-components";
import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselContainer from "../CarouselContainer/CarouselContainer";

import { forwardRef } from "react";

import { Suspense } from "react";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { carouselItemsArr } from "../../../menus/projectMenu";
import { useState } from "react";

export default forwardRef(function ProjectSection({ refStateObj }, ref) {
  // starts on index 0
  const [currentIndex, adjustIndex] = useState(0);
  const [viewableCardsArr, setViewableCards] = useState(
    carouselItemsArr.slice()
  );
  // TODO: slice the first three elements

  /* 
1) use the incoming array as our index references
2) onClick rightArrow, increment index, max is arr.length - 1
3) onClick leftArrow, decrement index min is 0
4)
 
*/
  const lastIndex = carouselItemsArr.length - 1;

  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledProjectSection
        ref={refStateObj.project}
        className="content-section"
      >
        <StyledProjectOverlay>
          <CarouselArrowLeft />
          <CarouselContainer
            currentIndex={currentIndex}
            adjustIndex={adjustIndex}
            carouselItemsArr={carouselItemsArr}
          />
          <CarouselArrowRight />
          <div className="carousel-ellipses-container">
            {carouselItemsArr.map((item) => (
              <span className="carousel-ellipses-item">O</span>
            ))}
          </div>
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
  height: 70rem;
`;

const StyledProjectOverlay = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0rem 1.5rem;
  align-items: center;
  justify-items: center;
  background-color: rgba(80, 70, 92, 0.4);
  grid-template-columns: 4rem auto 4rem;
  grid-template-rows: 1fr auto;

  .carousel-ellipses-container {
    display: flex;
    align-content: center;
    justify-content: center;
    grid-column: span 3;
    column-gap: 0.5rem;
  }
`;
