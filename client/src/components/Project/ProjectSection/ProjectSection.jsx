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
  const [currIndex, adjustCurrIndex] = useState(1);
  const handleEllipsesClick = (ev) => {
    //
    let indexClicked = +ev.target.dataset.index;
    console.log("indexClicked:", indexClicked);
    adjustCurrIndex(indexClicked);
  };

  // these touching states should work for mobile!
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

  console.log("currIndex:", currIndex);
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledProjectSection
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={refStateObj.project}
        className="content-section"
      >
        <StyledProjectOverlay>
          <CarouselArrowLeft
            currIndex={currIndex}
            adjustCurrIndex={adjustCurrIndex}
            carouselItemsArr={carouselItemsArr}
          />
          <CarouselContainer
            currIndex={currIndex}
            adjustCurrIndex={adjustCurrIndex}
            carouselItemsArr={carouselItemsArr}
          />
          <CarouselArrowRight
            carouselItemsArr={carouselItemsArr}
            currIndex={currIndex}
            adjustCurrIndex={adjustCurrIndex}
          />
          <div className="carousel-ellipses-container">
            {carouselItemsArr.map((item, i) => {
              console.log("i:", i);
              console.log("currIndex:", currIndex);
              if (i === currIndex) console.log("true");
              return (
                <span
                  style={{
                    backgroundColor: i === currIndex ? "white" : "transparent",
                  }}
                  data-index={i}
                  onClick={handleEllipsesClick}
                  key={i}
                  className="carousel-ellipses-item"
                ></span>
              );
            })}
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
  height: 65rem;
  overflow-x: hidden;
`;

const StyledProjectOverlay = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  /* margin: 0rem 1.5rem; */
  align-items: center;
  justify-items: center;
  background-color: rgba(80, 70, 92, 0.4);
  grid-template-columns: 3.5rem auto 3.5rem;
  grid-template-rows: auto 4rem;

  .carousel-ellipses-container {
    display: flex;
    height: 4rem;
    align-self: center;
    justify-self: center;
    align-items: center;
    grid-column: span 3;
    column-gap: 0.5rem;
  }

  .carousel-ellipses-item {
    border: 0.1rem solid white;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;
