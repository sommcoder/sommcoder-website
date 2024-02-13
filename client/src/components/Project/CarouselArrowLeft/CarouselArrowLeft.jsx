import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function CarouselArrowLeft() {
  return (
    <StyledCarouselArrowLeft>
      <FaArrowAltCircleLeft />
    </StyledCarouselArrowLeft>
  );
}
const StyledCarouselArrowLeft = styled.span`
  justify-self: left;
  margin-left: 1rem;
  grid-row: 1;
  svg {
    height: 3rem;
    width: 3rem;
  }
`;
