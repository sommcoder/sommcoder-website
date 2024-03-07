import styled from "styled-components";
// import { IoIosArrowDown } from 'react-icons/io';

import { forwardRef } from "react";
import youngme1 from "/me-computer1.jpg";
import youngme2 from "/me-computer2.jpg";
import { useState } from "react";

export default forwardRef(function AboutMeSection({ refStateObj }, ref) {
  const [moreState, toggleMore] = useState(false);

  function handleMoreClick() {
    toggleMore(true);
  }

  return (
    <StyledAboutMeSection ref={refStateObj.about} className="content-section">
      <div className="about-me-container content-card">
        <h3>About Me:</h3>
        <p className="relative-paragraph">
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
          <div
            onClick={handleMoreClick}
            className={`about-me-more-btn-overlay ${moreState ? "hidden" : ""}`}
          >
            <button id="show-more-btn">
              <span className="button-text">show more</span>
            </button>
          </div>
        </p>
        <p
          className={`about-me-more-container ${
            moreState ? "more-active" : "more-inactive"
          }`}
        >
          Looking back, having studied the minutiae of the wine industry
          certainly afforded me the ability to dive deep into the esoteric
          subject of web development.
          <br />
          <br />
          Truthfully, I was always drawn to computers. Even at 2 years old when
          our home computer had a screen that was as large as me, I loved
          playing video games and "surfing the web".🏄‍♂️
          <br />
          <br />
          With my extensive Hospitality experience, entrepreneurship and
          technical skill set, I offer a specialized knowledge base to help
          scale your online business and create value for your brand in the food
          and beverage industry.
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

  .about-me-more-btn-overlay {
    background: linear-gradient(
      rgba(255, 255, 255, 0.774),
      rgba(00, 00, 00, 0.1)
    );
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: end;
    bottom: -8%;
    right: 0%;
    height: 6rem;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(247, 243, 243, 0.4),
      rgba(247, 243, 243, 0.6)
    );
    z-index: 4;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 32rem) {
      // desktop styling here
      bottom: -18%;
    }
  }
  #show-more-btn {
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
  .relative-paragraph {
    position: relative;
  }

  .about-me-container {
    display: grid;
    border: 0.1rem solid #9e8cb0;
    padding: 0rem;
    margin: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
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

    p {
      padding: 0rem 3rem;
      display: flex;
      grid-column: span 2;
    }
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
