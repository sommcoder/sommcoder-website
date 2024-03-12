import styled from "styled-components";

import youngme1 from "/me-computer1.jpg";
import youngme2 from "/me-computer2.jpg";
import { useState } from "react";

import { aboutMeContentObj } from "../../../menus/aboutMeMenu.jsx";

export default function AboutMeCard() {
  const [moreState, toggleMore] = useState(false);

  function handleMoreClick() {
    toggleMore(true);
  }

  const charCountBreakPoint = 60;

  // TODO: would be much more responsive and portable if I setup the about me button to be dynamically rendered after a certain amount of characters after the end of the upcoming sentence. Much more dynamic than intentionally setting the overlay and button!

  return (
    <StyledAboutMeCard className="content-card">
      <h3>About Me:</h3>
      <StyledAboutMeTopParagraph>
        {aboutMeContentObj.topSection}
        <StyledMoreOverlay
          onClick={handleMoreClick}
          className={`${moreState ? "hidden" : ""}`}
        >
          <button>
            <span className="button-text">show more</span>
          </button>
        </StyledMoreOverlay>
      </StyledAboutMeTopParagraph>
      <StyledAboutMeBottomParagraph
        className={`${moreState ? "more-active" : ""}`}
      >
        {aboutMeContentObj.bottomSection}
      </StyledAboutMeBottomParagraph>
      <StyledImageContainer>
        <img className="personal-image-1" src={youngme1} />
        <img className="personal-image-2" src={youngme2} />
      </StyledImageContainer>
    </StyledAboutMeCard>
  );
}

const StyledAboutMeCard = styled.div`
  display: grid;
  border: 0.1rem solid #9e8cb0;
  /* padding: 0rem; */
  max-height: 250rem;
  margin: 3rem 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  row-gap: 2rem;

  h3 {
    vertical-align: middle;
    text-align: left;
    /* padding: 3rem 3rem 0rem 3rem; */
    width: auto;
    grid-column: span 2;
  }
`;

const StyledAboutMeTopParagraph = styled.p`
  position: relative;
  display: flex;
  grid-column: span 2;
`;

const StyledMoreOverlay = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(00, 00, 00, 0.1));
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: end;
  bottom: -3%;
  right: 0%;
  height: 6rem;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(247, 243, 243, 0.4),
    rgba(247, 243, 243, 0.6)
  );
  z-index: 4;

  &.hidden {
    display: none;
  }

  button {
    display: grid;
    justify-items: center;
    justify-content: center;
    column-gap: 0.2rem;
    align-content: center;
    align-items: center;
    color: black;
    background: #d6d5d5;
    border: 0.1rem solid darkgrey;
    padding: 0.1rem;
    height: 2rem;
    font-size: 1rem;
    z-index: 4;
    min-width: 6.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 32rem) {
    bottom: -10%;
  }
`;

const StyledAboutMeBottomParagraph = styled.p`
  display: none;
  grid-column: span 2;
  z-index: 1;
  color: rgba(0, 0, 0, 0);
  max-height: 0rem;

  &.more-active {
    display: flex;
    z-index: 3;
    color: rgba(0, 0, 0, 1);
    max-height: 60rem; // can't use auto, it can be transitioned into from 0rem.
    transition: color 500ms linear 250ms, z-index 0ms ease-in-out 0s,
      max-height 0s ease-in-out 0s;
  }
`;

const StyledImageContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: calc(66.7rem / 3);
    max-width: calc(106.4rem / 3);
    flex: 1 1 auto;
    border-radius: 2rem;
    // 1064 x 667
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }

  .personal-image-1 {
    align-self: center;
  }

  .personal-image-2 {
    display: none;
  }

  // 960px
  @media (min-width: 52rem) {
    grid-column: span 2;
    flex-direction: row;
    justify-content: center;

    .personal-image-2 {
      display: block;
      max-height: calc(66.7rem / 3);
      max-width: calc(106.4rem / 3);
      flex: 1 1 auto;
      border-radius: 2rem;
      // 1064 x 667
    }
  }
`;
