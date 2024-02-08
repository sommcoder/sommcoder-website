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
    border-top: 1rem solid transparent;
    border-right: 1rem solid white;
    border-bottom: 1rem solid transparent;

    margin-left: 1.5rem;

    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  }
`;
