import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";

export default function CarouselContainer() {
  return (
    <StyledCarouselContainer>
      <CarouselItem />
    </StyledCarouselContainer>
  );
}
const StyledCarouselContainer = styled.div``;
