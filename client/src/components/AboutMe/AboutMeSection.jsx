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
    <StyledAboutMeSection ref={ref.about} className="content-section">
      <div className="about-me-container content-card">
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
  background-image: url("/Wine Splatter.svg");

  .about-me-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto auto;
    column-gap: 1.5rem;
    row-gap: 1rem;

    h3 {
      grid-column: span 2;
    }
    .personal-image-grouping {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
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
      display: flex;
      grid-column: span 2;
    }
    ////////////////////////////////////////
    @media (min-width: 87.5rem) {
      grid-template-rows: 3rem auto;
      grid-template-columns: 1fr 1fr;

      .personal-image-2 {
        display: block;
        max-height: calc(66.7rem / 3);
        max-width: calc(106.4rem / 3);
        flex: 1 1 auto;
        border-radius: 2rem;
        // 1064 x 667
      }

      p {
        grid-column: span 1;
      }
    }
    ////////////////////////////////////////////
    @media (min-width: 150rem) {
      grid-template-rows: 3rem auto;
      grid-template-columns: 1fr;
      h3 {
        grid-column: span 1;
      }
      .personal-image-grouping {
        flex-direction: row;
        justify-content: center;
      }
    }
  }
`;
