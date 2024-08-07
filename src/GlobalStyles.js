import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  @keyframes fadeInAnimation {
    start {
      opacity: 0;
    }
    end {
      opacity: 1;
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    /* 62.5% of 16px browser font size is 10px */
    font-size: 62.5%; // allows for: 1rem = 10px
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    vertical-align: baseline;
    line-height: 1;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    vertical-align: baseline;
  }

  body {
    --dark-font: rgb(24, 24, 24);
    --light-font: whitesmoke;
    height: 100%;
    max-width: 100%;
    font-size: 1.6rem; // equals 16px
    background-color: rgb(53, 69, 56);
    color: white;
  }

  h5 {
    font-size: 1.3rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  div {
    animation: fadeInAnimation ease-in-out 1s;
    animation-iteration-count: 1;
  }

  /* li,
  svg {
    &:hover {
      cursor: pointer;
      filter: brightness(85%) !important;
    }
  } */

  .content-section {
    display: grid;
    align-items: center;
    justify-items: center;
    min-width: inherit;
    min-height: inherit;
  }

  .content-card {
    min-width: 28rem;
    max-width: 85rem;
    min-height: 35rem;
    margin: 1rem 2rem;
    padding: 3rem;
    color: var(--dark-font);
    background-color: whitesmoke;
    border-radius: 2rem;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }

  // Want to make the button and overall shape of the web page look 3 dimensional and "textured" / wavy
  button {
    font-family: "PT Serif", sans-serif;
    display: inline-block;
    position: relative;
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--dark-font);
    border: none;
    height: 3.5rem;
    width: auto; // width of button adjusts based on text content
    min-width: 10rem;
    /* padding: 0.5rem; */
    text-align: center;
    border-radius: 1rem;
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    padding: 0.5rem;
    text-align: center;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
    animation: fadeInAnimation ease-in-out 1s;
    animation-iteration-count: 1;

    &:hover {
      cursor: pointer;
      filter: brightness(85%);
      transition: 200ms ease-in-out;
      transform: translateY(-2.5px);
    }
  }

  .button-text {
    display: inline-block;
    width: 100%;
    height: 100%;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    text-wrap: wrap; // not working..?
    pointer-events: none; // NEEDED! Avoids the issue of the form not submitting due to button-text being clicked instead of the button element

    &:active {
      // move text down slightly as if being pushed
      transform: translateY(0.1rem);
    }
  }
`}`;

export default GlobalStyles;
