import styled from "styled-components";

import { Suspense } from "react";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function CarouselItem({
  item,
  indexFromCurrent,
  adjustCurrIndex,
  index,
}) {
  const handleItemClick = (ev) => adjustCurrIndex(+ev.target.dataset.index);

  return (
    <StyledCarouselItem
      data-index={index}
      onClick={handleItemClick}
      // calculates each items absolute positioning based on it's index. 0 is the center.
      // A +/- indexFromCurrent determines where in relation to 0 the item will be positioned
      position={indexFromCurrent == 0 ? 0 : indexFromCurrent * 105}
      activeCard={indexFromCurrent == 0 ? true : false}
    >
      <div className="carousel-content-wrapper" data-index={index}>
        <div data-index={index} className="carousel-item-thumbnail-container">
          <Suspense fallback={<LoadingEllipsis />}>
            <img className="carousel-item-thumbnail" src={item.thumbnail} />
          </Suspense>
        </div>
        <div
          data-index={index}
          className="carousel-item-banner"
          onClick={handleItemClick}
        >
          <h3>{item.title}</h3>
          <p>{item.short}</p>
        </div>
      </div>
      <div className="carousel-item-icon-container" data-index={index}>
        {Object.keys(item.links).map((link, i) => {
          return item.links[link] ? (
            <a
              target="_blank"
              href={item.links[link]}
              className="carousel-icon-box"
              key={i}
            >
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

const StyledCarouselItem = styled.div`
  position: absolute;
  top: 7.5%; // hopefully this avoids that glitchy issue we were seeing
  display: grid;
  grid-template-rows: 37rem 5rem; // content, icon container
  justify-items: center;
  text-align: center;
  width: 31rem; // same width as the width of the container
  border-radius: 2rem;
  background-color: rgb(80, 104, 84);

  &:hover {
    cursor: pointer;
  }

  ${(props) => `
   z-index: 1;
   transform: translateX(${props.position}%);
   box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
   filter: brightness(65%);
   transition: transform 250ms linear;
  `}
  ${(props) =>
    props.activeCard &&
    `
    z-index: 3;
   opacity: 1;
   box-shadow: 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.08),
    0 0 0.2rem 0.2rem rgba(255, 255, 255, 0.12), 0 0 0.4rem 0.4rem rgba(255, 255, 255, 0.16),
    0 0 0.8rem 0.8rem rgba(255, 255, 255, 0.2);
  transition: filter 200ms ease-in-out;
    transition: box-shadow 200ms ease-in-out;
  filter: none;
  `}

  // wrapper allows for the banner to hover over the thumbnail
    .carousel-content-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .carousel-item-banner {
    pointer-events: none;
    display: grid;
    row-gap: 0.5rem;
    align-content: center;
    bottom: 0%;
    position: absolute;
    height: 6rem;
    width: 100%;
    z-index: 2;
    font-size: 1.8rem;
    color: black;
    font-weight: 800;
    background-color: rgba(255, 255, 255, 0.9);

    p {
      font-size: 1.2rem;
      font-style: italic;
    }
  }

  .carousel-item-icon-container {
    display: flex;
    z-index: 2;
    width: 100%;
    height: 5rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    column-gap: 3rem;
    border-radius: 0rem 0rem 2rem 2rem;
    background-color: rgb(80, 104, 84);
  }

  svg {
    &:hover {
      filter: brightness(-40%);
    }
  }

  .carousel-icon-box {
    display: grid;
    align-items: center;
    justify-items: center;
    width: auto;
    height: auto;
    /* svg {
      filter: brightness(10%);
    } */
  }

  /* &:hover {
    cursor: pointer;
    transition: 200ms ease-in-out;
    transform: translateY(-0.75rem);
  } */
  .carousel-item-thumbnail-container {
    width: 100%;
    height: 100%;
    border-radius: 2rem 2rem 0rem 0rem;
  }

  .carousel-item-thumbnail {
    pointer-events: none;
    height: auto;
    overflow-y: hidden;
    width: 100%;
    border-radius: 2rem 2rem 0rem 0rem;
  }
`;
