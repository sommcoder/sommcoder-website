import styled from "styled-components";

import { FaArrowAltCircleRight } from "react-icons/fa";

export default function CarouselArrowRight() {
  return (
    <StyledCarouselArrowRight>
      <FaArrowAltCircleRight />
    </StyledCarouselArrowRight>
  );
}
const StyledCarouselArrowRight = styled.span`
  justify-self: right;
  margin-right: 1rem;
  grid-row: 1;

  svg {
    height: 3rem;
    width: 3rem;
  }
`;
