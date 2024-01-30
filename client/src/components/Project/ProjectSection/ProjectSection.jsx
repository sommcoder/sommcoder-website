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
          <StyledProjectSectionTitle>
            <h5 className="project-section-title">My Personal Projects:</h5>
          </StyledProjectSectionTitle>
          <CarouselArrowLeft />
          <CarouselSection />
          <CarouselArrowRight />
        </StyledProjectOverlay>
      </StyledProjectSection>
    </Suspense>
  );
}
const StyledProjectSection = styled.section`
  justify-self: center;
  margin-bottom: 2rem;
  width: 100%;
  height: fit-content;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  box-shadow: inset 20px 30px 30px rgb(80, 104, 84);
  background-image: linear-gradient(to top, transparent, 85%, #837960),
    linear-gradient(to bottom, transparent, 85%, #837960),
    url("/code image.png");
`;

const StyledProjectOverlay = styled.div`
  background-color: rgba(80, 70, 92, 0.4);
  height: fit-content;
  width: 100%;
  padding: 2rem 0rem;
  display: grid;
  grid-template-rows: 8rem auto;
  align-items: center;
  align-content: center;
`;

const StyledProjectSectionTitle = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.199);
  height: 6rem;
  display: flex;
  width: 40rem;
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  .project-section-title {
    font-size: 3rem;
  }
`;
