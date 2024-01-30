import styled from "styled-components";

export default function CarouselArrowLeft() {
  return <StyledCarouselArrowLeft></StyledCarouselArrowLeft>;
}
const StyledCarouselArrowLeft = styled.span`
  display: none;

  @media (min-width: 800) {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 10px solid white;
    border-bottom: 10px solid transparent;

    margin-left: 1.5rem;

    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  }
`;
