import styled from "styled-components";

export default function CarouselArrowRight() {
  return <StyledCarouselArrowRight></StyledCarouselArrowRight>;
}
const StyledCarouselArrowRight = styled.span`
  display: none;

  @media (min-width: 1280) {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid white;
    border-bottom: 10px solid transparent;

    margin-right: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
