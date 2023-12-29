﻿import styled from "styled-components";

export default function CarouselItem({ thumbnail, title, link, short }) {
  function linkToProject(e) {
    e.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <StyledCarouselItem onClick={linkToProject} href={link}>
      <h3>{title}</h3>
      <img src={thumbnail} />

      <p>{short}</p>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.a`
  display: grid;
  justify-items: center;
  text-align: center;

  grid-template-rows: auto auto 33%;
  row-gap: 1.5rem;

  padding: 2rem;
  text-decoration: none;

  min-height: 100px;
  height: auto;
  border-radius: 50px;
  background: #324935;
  box-shadow: 20px 20px 60px #2b3e2d, -20px -20px 60px #3a543d;

  /*
  should adjust this  to a gif or short video asset!
  */

  &:hover {
    cursor: pointer;
    transition: 200ms ease-in-out;
    transform: translateY(-2.5px);
  }

  img {
    max-height: 210px;
    max-width: 210px;
    height: auto;
    width: auto;
    border-radius: 10px;
  }
`;
