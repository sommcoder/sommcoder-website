import styled, { keyframes } from "styled-components";

export default function IntroHeader() {
  // turns string into an array of individual characters
  const typedAnimationArr =
    "AND I'M A FULL-STACK WEB DEVELOPER & SHOPIFY EXPERT".split("");

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
      <h1>
        BRIAN DAVIES
        <h5>(aka SOMMCODER)</h5>
      </h1>
      <h4>{typedAnimationArr.map((char) => char)}</h4>
    </StyledIntroHeader>
  );
}
const StyledIntroHeader = styled.span`
  align-self: center;
  overflow-wrap: wrap;

  h4 {
    line-height: 1.3;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-style: italic;
  }

  @media (max-width: 475px) {
    grid-column: span 2;
    justify-content: center;
  }
`;
