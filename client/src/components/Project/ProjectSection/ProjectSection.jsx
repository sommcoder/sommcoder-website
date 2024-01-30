import styled from "styled-components";
import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselSection from "../CarouselSection/CarouselSection";

import { Suspense } from "react";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

export default function ProjectSection() {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <StyledProjectSection>
        <StyledProjectOverlay>
          <CarouselArrowLeft />
          <CarouselSection />
          <CarouselArrowRight />
        </StyledProjectOverlay>
      </StyledProjectSection>
    </Suspense>
  );
}
const StyledProjectSection = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  box-shadow: inset 20px 30px 30px rgb(80, 104, 84);
  background-image: linear-gradient(to top, transparent, 85%, #837960),
    linear-gradient(to bottom, transparent, 85%, #837960),
    url("../../../../public/code image.png");
`;

const StyledProjectOverlay = styled.div`
  background-color: rgba(80, 70, 92, 0.4);
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
  align-items: center;
  align-content: center;
`;
