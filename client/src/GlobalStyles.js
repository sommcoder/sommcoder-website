import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 67.5%; // now 1.6 rem should equal 16 pt font
    height: 100%;
    overflow: auto;
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
    padding: 0.5rem;
    text-align: center;
    border-radius: 10px;
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    box-shadow: 20px 20px 60px #9584a7, -20px -20px 60px #c9b2e1;
    /* &:active {
      border-radius: 50px;
      background: linear-gradient(145deg, #9e8cb0, #bba6d2);
      box-shadow: 20px 20px 60px #9584a7, -20px -20px 60px #c9b2e1;
    } */
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
`}`;

export default GlobalStyles;
