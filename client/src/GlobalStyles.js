import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
  }

  //! Don't give your sections any padding. This creates weird overflow issues. Components can have padding but sections should be width: 100% of their container right up into the right element

  // * height?: deal with min-height
  // * width?: deal with max-width

  html {
    font-size: 62.5%; // allows for: 1rem = 10px
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    vertical-align: baseline;
  }

  body {
    height: 100%;
    max-width: 100%;
    font-size: 1.6rem;
    background-color: #506854;
    color: white;
    font-family: "PT Serif", sans-serif;
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

    @keyframes fadeInAnimation {
      start {
        opacity: 0;
      }
      end {
        opacity: 1;
      }
    }
  }
  // Want to make the button and overall shape of the web page look 3 dimensional and "textured" / wavy
  button {
    font-family: "PT Serif", sans-serif;
    display: inline-block;
    position: relative;
    font-weight: 600;
    font-size: 1.2rem;
    color: black;
    border: none;
    height: 3.5rem;
    width: auto; // width of button adjusts based on text content
    min-width: 10rem;
    /* padding: 0.5rem; */
    text-align: center;
    border-radius: 10px;
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    padding: 0.5rem;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
    animation: fadeInAnimation ease-in-out 1s;
    animation-iteration-count: 1;

    &:hover {
      cursor: pointer;
      filter: brightness(85%);
      transition: 200ms ease-in-out;
      transform: translateY(-2.5px);
    }

    @keyframes fadeInAnimation {
      start {
        opacity: 0;
      }
      end {
        opacity: 1;
      }
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
      transform: translateY(1px);
    }
  }
`}`;

export default GlobalStyles;
