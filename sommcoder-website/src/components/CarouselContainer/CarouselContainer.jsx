import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";

export default function CarouselContainer() {
  // we should useEffect to fetch public git repositories and post them here

  // we want to get an array so that we can map them to produce the number of CarouselItems needed WITH their content

  return (
    <StyledCarouselContainer>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </StyledCarouselContainer>
  );
}
const StyledCarouselContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
  grid-template-rows: 1fr;
  grid-template-columns: 240px 240px 240px 240px;
  height: 350px;
  overflow: visible;
  // we need to have the carousel items appear as if they are cycling through the page
`;
