import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 67.5%;
    background-color: #0a1a0d;
    color: white;
  }

  body {
    max-width: 100%;
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
    display: inline-block;
    position: relative;

    font-weight: 600;
    font-size: 1.25rem;
    color: black;

    border-radius: 10px;
    border: none;
    height: 3.5rem;
    width: 10rem;
    padding: 0.5rem;
    text-align: center;
    background-color: #af9bc4;

    padding: 0.5rem;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    animation: fadeInAnimation ease-in-out 1s;
    animation-iteration-count: 1;

    &:hover {
      cursor: pointer;
      filter: brightness(85%);
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
`}`;

export default GlobalStyles;
