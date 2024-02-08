import styled from "styled-components";

export default function CarouselArrowRight() {
  return <StyledCarouselArrowRight></StyledCarouselArrowRight>;
}
const StyledCarouselArrowRight = styled.span`
  display: none;

  @media (min-width: 800) {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-top: 1rem solid transparent;
    border-left: 1rem solid white;
    border-bottom: 1rem solid transparent;

    margin-right: 1.5rem;

    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  }
`;
