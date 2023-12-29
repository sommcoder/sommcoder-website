import styled from "styled-components";

export default function CarouselArrowLeft() {
  return <StyledCarouselArrowLeft></StyledCarouselArrowLeft>;
}
const StyledCarouselArrowLeft = styled.div`
  display: none;

  @media (min-width: 1280) {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid white;
    border-bottom: 10px solid transparent;

    margin-left: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
