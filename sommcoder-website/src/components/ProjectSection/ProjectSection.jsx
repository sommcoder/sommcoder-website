import styled from "styled-components";
import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselSection from "../CarouselSection/CarouselSection";

export default function ProjectSection() {
  return (
    <StyledProjectSection>
      <CarouselArrowLeft />
      <CarouselSection />
      <CarouselArrowRight />
    </StyledProjectSection>
  );
}
const StyledProjectSection = styled.div`
  display: grid;
  grid-template-columns: auto;
  max-width: 1280px;

  @media (min-width: 1280) {
    grid-template-columns: 2.5% auto 2.5%;
    align-items: center;
  }
`;
