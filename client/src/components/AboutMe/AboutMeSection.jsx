import styled from "styled-components";

import { forwardRef } from "react";
import youngme1 from "/me-computer1.jpg";
import youngme2 from "/me-computer2.jpg";
import { useState } from "react";

export default forwardRef(function AboutMeSection({ refStateObj }, ref) {
  //TODO: create a "more" selection to avoid a long

  const [moreState, toggleMore] = useState(false);

  function handleMoreClick() {
    console.log("clicked");
    console.log(moreState);
    toggleMore(true);
  }

  return (
    <StyledAboutMeSection ref={refStateObj.about} className="content-section">
      <div className="about-me-container content-card">
        <h3>About Me:</h3>
        <p>
          After more than 12 years in the Hospitality industry as a wine
          sommelier, I discovered my passion for software development while
          building my own web-based wine subscription business in response to
          the challenges posed by COVID-19. <br />
          <br />
          Once I became proficient in CMS platforms (like Squarespace & Shopify)
          for my business, I embarked on a journey of self-study, online
          courses, and personal projects to delve into the intricacies of web
          development with HTML, CSS and JavaScript which grabbed and held my
          attention.
        </p>
        <div
          onClick={handleMoreClick}
          className={`about-me-more-btn ${moreState ? "hidden" : ""}`}
        >
          show more
        </div>

        <p
          className={`about-me-more-container ${
            moreState ? "more-active" : "more-inactive"
          }`}
        >
          Studying the minutiae of the wine industry certainly afforded me the
          ability to dive deep into the vast subject of web programming.
          <br />
          <br />
          Truthfully, I was always drawn to computers, even at 2 years old when
          our home computer had a screen that was as large as me.
          <br />
          <br />
          With my extensive Hospitality experience and technical skill set, I
          offer a highly specialized knowledge base to help scale your online
          presence and create a tonne of value for your shareholders.
          <br />
          <br />- Brian Davies
        </p>

        <span className="personal-image-grouping">
          <img className="personal-images personal-image-1" src={youngme1} />
          <img className="personal-images personal-image-2" src={youngme2} />
        </span>
      </div>
    </StyledAboutMeSection>
  );
});

// TODO: Get the personal images centered correctly for all screen sizes and figure out a way to create a nice more button functionality that looks like many popular article websites.

const StyledAboutMeSection = styled.section`
  background-image: url("/Wine Splatter.svg");
  height: auto;
  .about-me-more-btn {
    font-weight: 600;
    display: grid;
    grid-column: span 2;
    align-items: center;
    justify-items: center;
  }

  .about-me-more-container {
    display: none;
  }

  .about-me-more-btn {
    background-color: rgba(00, 00, 00, 0.1);
    background: linear-gradient(
      rgba(255, 255, 255, 0.774),
      rgba(00, 00, 00, 0.1)
    );
    height: 1.6rem;
    /* min-width: 32rem;
    max-width: 60rem; */
    width: 100%;
    border-bottom: 1px solid grey;
    opacity: 0.5;
    box-shadow: 0 4px 3px -3px gray;
    /* It's actually much simpler, whatever you set the blur to (3rd value), set the spread (4th value) to the negative of it. */
    &:hover {
      cursor: pointer;
    }
  }
  .about-me-container {
    display: grid;
    padding: 0rem;
    margin: 2rem 2rem 1rem 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    row-gap: 2rem;

    h3 {
      vertical-align: middle;
      text-align: left;
      padding: 3rem 3rem 0rem 3rem;
      width: auto;
      grid-column: span 2;
    }
    .personal-image-grouping {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      padding: 0rem 3rem 3rem 3rem;
    }

    .personal-images {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: calc(66.7rem / 3);
      max-width: calc(106.4rem / 3);
      flex: 1 1 auto;
      border-radius: 2rem;
      // 1064 x 667
    }

    .personal-image-1 {
      align-self: center;
    }

    .personal-image-2 {
      display: none;
    }

    p {
      padding: 0rem 3rem;
      display: flex;
      grid-column: span 2;
    }
    ////////////////////////////////////////
    // TODO: something is fucky with this
    // 960px

    @media (min-width: 52rem) {
      grid-template-columns: 1fr 1fr;
      p {
        grid-column: span 2;
      }
      h3 {
        grid-column: span 2;
      }
      .personal-image-2 {
        display: block;
        max-height: calc(66.7rem / 3);
        max-width: calc(106.4rem / 3);
        flex: 1 1 auto;
        border-radius: 2rem;
        // 1064 x 667
      }
      .personal-image-grouping {
        grid-column: span 2;
        flex-direction: row;
        justify-content: center;
      }
    }

    .more-active {
      display: block;
      z-index: 3;
      color: rgba(0, 0, 0, 1);
      max-height: auto;
      transition: color 500ms linear 250ms;
      transition: z-index 0ms ease-in-out 0s;
      transition: max-height 0s ease-in-out 0s;
    }
    .hidden {
      display: none;
    }
    .more-inactive {
      z-index: 1;
      color: rgba(0, 0, 0, 0);
      max-height: 0rem;
      transition: color 0s linear 0s;
      transition: z-index 0s ease-in-out 0s;
      transition: max-height 0s ease-in-out 0s;
    }
  }
`;
