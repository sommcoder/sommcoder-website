import styled from "styled-components";

import { forwardRef } from "react";
import youngme1 from "/me-computer1.jpg";
import youngme2 from "/me-computer2.jpg";

export default forwardRef(function AboutMeSection(props, ref) {
  /*
   
  TODO: this will obviously need to be improvded. Just wanted to get some initial content down
   
  */

  //TODO: create a "more" selection to avoid a long
  return (
    <StyledAboutMeSection ref={ref.about}>
      <div className="about-me-container">
        <h3>About Me:</h3>
        <p>
          After more than 12 years in the Hospitality industry as a wine
          sommelier, I discovered my passion for software development while
          building my own web-based wine subscription business in response to
          the challenges posed by COVID-19. <br />
          <br />
          Once I became proficient in CMS platforms (Squarespace & Shopify) for
          my business, I embarked on a journey of self-study, online courses,
          and personal projects to delve into the intricacies of web development
          with HTML, CSS and JavaScript which grabbed and held my attention.
          <br />
          <br />
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

const StyledAboutMeSection = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  min-width: inherit;
  min-height: inherit;
  background-image: url("/Wine Splatter.svg");

  .about-me-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto auto;
    column-gap: 1.5rem;
    row-gap: 1rem;
    min-width: 28rem;
    max-width: 75rem;
    min-height: 35rem;
    margin: 1rem 2rem;
    padding: 3rem;
    color: black;
    background-color: whitesmoke;
    border-radius: 2rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);

    @media (min-width: 875px) {
      grid-template-rows: 3rem auto;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1500px) {
      grid-template-rows: 3rem auto;
      grid-template-columns: 1fr;
    }

    h3 {
      grid-column: span 2;
      @media (min-width: 1500px) {
        grid-column: span 1;
      }
    }
    .personal-image-grouping {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      @media (min-width: 1500px) {
        flex-direction: row;
        justify-content: center;
      }
      /* flex-wrap: wrap;  <-- don't use this! */
    }

    .personal-images {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: calc(667px / 3);
      max-width: calc(1064px / 3);
      flex: 1 1 auto;
      border-radius: 2rem;
      // 1064 x 667
    }

    .personal-image-1 {
      align-self: center;
    }

    .personal-image-2 {
      // reduce down to just one image
      display: none;
      @media (min-width: 875px) {
        display: block;
        max-height: calc(667px / 3);
        max-width: calc(1064px / 3);
        flex: 1 1 auto;
        border-radius: 2rem;
        // 1064 x 667
      }
    }

    p {
      display: flex;
      grid-column: span 2;
      @media (min-width: 875px) {
        grid-column: span 1;
      }
    }
  }

  @media (min-width: 800px) {
  }
`;
