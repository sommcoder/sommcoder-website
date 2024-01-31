import styled from "styled-components";

export default function CarouselItemOverlay({ hoverState, short }) {
  return (
    <StyledCarouselItemOverlay active={hoverState}>
      <h5>{short}</h5>
    </StyledCarouselItemOverlay>
  );
}

const StyledCarouselItemOverlay = styled.span`
  // mobile and general styling
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.836);
  display: ${({ active }) => (active ? "grid" : "none")};
  pointer-events: none;
  border-radius: 2rem;
  color: ${({ active }) => (active ? "black" : "transparent")};
  align-items: center;
  justify-items: center;
  transition: 200ms ease-in-out; // no effect currently

  h5 {
    width: 12rem;
    word-wrap: break-word;
  }
  @media (min-width: 800) {
    // desktop styling here
  }
`;
