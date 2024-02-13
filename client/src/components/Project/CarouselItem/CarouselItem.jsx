﻿import { useState } from "react";
import styled from "styled-components";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function CarouselItem({ item }) {
  function linkToProject(ev, link) {
    console.log("link:", link);
    ev.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <StyledCarouselItem onClick={(ev) => linkToProject(ev, item.links.youtube)}>
      <iframe
        onClick={(ev) => linkToProject(ev, item.links.youtube)}
        src={item.links.youtube}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
  /* top: 7.5%;
  right: 100%; */
  position: absolute;
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 1rem 0rem;
  width: 31rem;
  height: 56rem;
  border-radius: 2rem;
  background-color: rgb(80, 104, 84);
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);

  iframe {
    border: none;
    width: 30rem;
    height: 50rem;
    border-radius: 2rem;
  }

  .carousel-item-icon-container {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    border: 0.1rem solid white;
    border-radius: 2rem;
    padding: 0rem 1rem;
  }

  .carousel-icon-box {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 8rem;
    height: 100%;
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

  .prevCard {
    left: calc(0% + 2rem);
    opacity: 0;
  }

  .activeCard {
    left: 50%;
    transform: translateX(-50%);
  }

  .nextCard {
    left: 100%;
    transform: translateX(calc(-100% - 2rem));
    opacity: 0;
  }
`;
