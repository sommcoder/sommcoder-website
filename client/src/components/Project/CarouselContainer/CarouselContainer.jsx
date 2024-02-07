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
  display: flex;
  width: auto;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  /* grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: 1fr; */
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  justify-content: center; /* Center items horizontally */
  align-content: center; /* Center items vertically */
`;
