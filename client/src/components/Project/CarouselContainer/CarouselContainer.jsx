import styled from 'styled-components';
import CarouselItem from '../CarouselItem/CarouselItem';

export default function CarouselContainer({
  carouselItemsArr,
  currIndex,
  adjustCurrIndex,
}) {
  const lastIndex = carouselItemsArr.length - 1;
  return (
    <StyledCarouselContainer>
      {carouselItemsArr.map((item, i) => (
        <CarouselItem
          item={item}
          index={i}
          indexFromCurrent={i - currIndex}
          key={i}
          lastIndex={lastIndex}
          currIndex={currIndex}
          adjustCurrIndex={adjustCurrIndex}
          carouselItemsArr={carouselItemsArr}
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
