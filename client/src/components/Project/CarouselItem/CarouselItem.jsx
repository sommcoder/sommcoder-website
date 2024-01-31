import { useState } from "react";
import styled from "styled-components";
import CarouselItemOverlay from "../CarouselItemOverlay/CarouselItemOverlay";

export default function CarouselItem({ thumbnail, title, link, short }) {
  function linkToProject(e) {
    e.preventDefault();
    window.open(link, "_blank");
  }

  const [hoverState, toggleHoverState] = useState(false);
  const handleHoverOverlay = () =>
    hoverState ? toggleHoverState(false) : toggleHoverState(true);

  // add a <video> tag for YouTube links
  // create brief tutorial videos on Loom and upload them to YT

  return (
    <StyledCarouselItem
      onClick={linkToProject}
      onMouseEnter={handleHoverOverlay}
      onMouseLeave={handleHoverOverlay}
      href={link}
    >
      <CarouselItemOverlay hoverState={hoverState} short={short} />
      <img src={thumbnail} name={title} />
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.a`
  position: relative;
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 1rem 0rem;
  min-height: 27.5rem;
  border-radius: 2rem;
  background-color: rgb(80, 104, 84);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  transition: transform 200ms ease-in-out;

  /*
  TODO: should adjust this to a gif or short video asset eventually!
  */

  &:hover {
    cursor: pointer;
    transition: 200ms ease-in-out;
    transform: translateY(-0.75rem);
  }

  img {
    pointer-events: none;

    max-height: 210px;
    width: 90%;
    border-radius: 1rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }
`;
