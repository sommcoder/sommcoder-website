import styled from "styled-components";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function CarouselItem({ item, indexFromCurrent }) {
  function linkToProject(ev, link) {
    console.log("link:", link);
    ev.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <StyledCarouselItem
      position={indexFromCurrent == 0 ? 0 : indexFromCurrent * 105}
      activeCard={indexFromCurrent == 0 ? true : false}
      onClick={(ev) => linkToProject(ev, item.links.youtube)}
    >
      <iframe
        src={item.links.youtube}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
        allowFullScreen
      />
      <div className="carousel-item-icon-container">
        {Object.keys(item.links).map((link, i) => {
          return item.links[link] ? (
            <a href={item.links[link]} className="carousel-icon-box" key={i}>
              {ICON_COMPONENTS[link].component}
            </a>
          ) : (
            ""
          );
        })}
      </div>
    </StyledCarouselItem>
  );
}

// TODO: why is active applying to all instead of each

const StyledCarouselItem = styled.div`
  position: absolute;
  top: 7.5%; // hopefully this avoids that glitchy issue we were seeing
  display: grid;
  grid-template-rows: 50rem 6rem;
  justify-items: center;
  text-align: center;
  width: 31rem; // same width as the width of the container
  height: 56rem;
  border-radius: 2rem;
  background-color: rgb(80, 104, 84);

  ${(props) => `
   left: ${props.position}%;
   box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
   filter: brightness(65%);
  `}

  ${(props) =>
    props.activeCard &&
    `
  opacity: 1;
box-shadow: 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.08),
    0 0 0.2rem 0.2rem rgba(255, 255, 255, 0.12), 0 0 0.4rem 0.4rem rgba(255, 255, 255, 0.16),
    0 0 0.8rem 0.8rem rgba(255, 255, 255, 0.2);
  transition: filter 350ms ease-in-out;
    transition: box-shadow 350ms ease-in-out;
  filter: none;
  `}

  iframe {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 2rem 2rem 0rem 0rem;
  }

  .carousel-item-icon-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    border-radius: 0rem 0rem 2rem 2rem;
    background-color: rgb(80, 104, 84);
  }

  .carousel-icon-box {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 8rem;
    height: 100%;
    /* svg {
      filter: brightness(10%);
    } */
  }

  &:hover {
    cursor: pointer;
    transition: 200ms ease-in-out;
    transform: translateY(-0.75rem);
  }

  img {
    pointer-events: none;
    max-height: 21rem;
    width: 90%;
    border-radius: 1rem;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }
`;
