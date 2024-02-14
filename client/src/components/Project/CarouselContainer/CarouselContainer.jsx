import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";

export default function CarouselContainer({ carouselItemsArr, currIndex }) {
  const lastIndex = carouselItemsArr.length - 1;
  return (
    <StyledCarouselContainer>
      {carouselItemsArr.map((item, i) => (
        <CarouselItem
          item={item}
          indexFromCurrent={i - currIndex}
          key={i}
          lastIndex={lastIndex}
        />
      ))}
    </StyledCarouselContainer>
  );
}
const StyledCarouselContainer = styled.div`
  position: relative;
  display: grid;
  grid-column: 2;
  grid-row: 1;
  grid-template-rows: 1fr; // just one row
  width: 31rem;
  height: 100%;
  align-items: center;
  justify-self: center;
  align-self: center;
`;
