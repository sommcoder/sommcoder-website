import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function CarouselArrowRight({
  currIndex,
  adjustCurrIndex,
  carouselItemsArr,
}) {
  function handleClick() {
    if (currIndex === carouselItemsArr.length - 1) return;
    adjustCurrIndex(currIndex + 1);
  }
  return (
    <StyledCarouselArrowRight onClick={handleClick}>
      <FaArrowAltCircleRight />
    </StyledCarouselArrowRight>
  );
}
const StyledCarouselArrowRight = styled.span`
  justify-self: right;
  margin-right: 0.5rem;
  grid-row: 1;
  z-index: 3;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
  &:active {
    filter: brightness(80%);
  }

  svg {
    height: 3rem;
    width: 3rem;
    background-color: rgb(53, 69, 56);
    border-radius: 50%;
  }
`;
