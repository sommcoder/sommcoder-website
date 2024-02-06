import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";

import { carouselItemsArr } from "./carouselIndex";

export default function CarouselContainer() {
  // we should use Firebase's Firestore Document DB to store and fetch this data
  // the long description will get passed to the Page only

  /*

TODO: maybe have the YouTube shorts appear on desktop only but for mobile provide the links when a user clicks on the carouselItem. like: onFocus(showLinks())
  
  */

  return (
    <StyledCarouselContainer>
      {carouselItemsArr.map((item, i) => (
        <CarouselItem item={item} key={i} />
      ))}
    </StyledCarouselContainer>
  );
}
const StyledCarouselContainer = styled.div`
  display: grid;
  width: auto;
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  justify-content: center; /* Center items horizontally */
  align-content: center; /* Center items vertically */

  // TODO: need to center the Items. why does the above not work??
  // desktop:
  @media (min-width: 850px) {
    // ! When auto-fill is given as the repetition number, if the grid container has a definite size or max size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container.
    grid-template-columns: repeat(auto-fill, 31rem);
    /* grid-template-rows: 1fr; */
    margin-top: 0rem;
  }

  /*
   
  DESKTOP:
  - we want the carousel items to transition from the right
  - we want the carousel arrows to actually render
   
  */
`;
