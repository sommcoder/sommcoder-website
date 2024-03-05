import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function CarouselArrowLeft({ currIndex, adjustCurrIndex }) {
  function handleClick() {
    if (currIndex === 0) return;
    adjustCurrIndex(currIndex - 1);
  }
  return (
    <StyledCarouselArrowLeft onClick={handleClick}>
      <FaArrowAltCircleLeft />
    </StyledCarouselArrowLeft>
  );
}
const StyledCarouselArrowLeft = styled.span`
  justify-self: left;
  margin-left: 0.5rem;
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
