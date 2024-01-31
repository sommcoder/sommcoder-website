import styled, { keyframes } from "styled-components";

export default function IntroHeader() {
  // turns string into an array of individual characters
  const typedAnimationArr =
    "I'M A FULL-STACK WEB DEVELOPER & SHOPIFY EXPERT".split("");

  const typingAnimation = keyframes`
    0% {
      transform: RotateX(10deg);
      background-color: #f9ea93;
    }
    50% {
      transform: RotateX(90deg);
    }
    100% {
      transform: RotateX(0deg);
    }
`;

  // use this array to generate the characters

  return (
    <StyledIntroHeader>
      <h4>Hi There 👋, I'm</h4>
      <h1>BRIAN DAVIES</h1>
      <h5>(aka SOMMCODER)</h5>
      <h4>{typedAnimationArr.map((char) => char)}</h4>
    </StyledIntroHeader>
  );
}
const StyledIntroHeader = styled.span`
  align-self: center;
  display: grid;
  row-gap: 1rem;
  width: 100%;
  word-break: break-all;

  h4 {
    display: flex;
    flex-shrink: 1;
    line-height: 1.3;
    font-size: 2rem;
  }
  h1 {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;

    font-size: 4rem;
  }
  h5 {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;

    font-size: 1.4rem;
  }
  // should adjust to reflective "mobile first" responsiveness
  @media (max-width: 475px) {
    grid-column: span 2;
    justify-content: center;
  }
`;
