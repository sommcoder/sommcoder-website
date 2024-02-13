import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";

export default function CarouselContainer({ carouselItemsArr }) {
  // we should use Firebase's Firestore Document DB to store and fetch this data
  // the long description will get passed to the Page only

  return (
    <StyledCarouselContainer>
      {carouselItemsArr.map((item, i) => (
        <CarouselItem item={item} key={i} />
      ))}
    </StyledCarouselContainer>
  );
}
const StyledCarouselContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr; // just one row
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
`;
