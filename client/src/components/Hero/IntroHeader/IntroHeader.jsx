import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function IntroHeader() {
  // turns string into an array of individual characters
  const typingString =
    "I'M A FULL-STACK SOFTWARE DEVELOPER, SHOPIFY EXPERT && HOSPITALITY SPECIALIST";

  const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

  const blinkCursor = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
`;

  const Wrapper = styled.div`
    display: flex;
    flex-shrink: 1;
    line-height: 1.3;
    font-size: 2rem;
    white-space: collapse balance;
    max-width: 51rem;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid white;
  `;

  // we will use useEffect to incrementally add sliced characters and set them using this useState hook
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentCharacter = 0;

    const typingEffect = setInterval(() => {
      if (currentCharacter <= typingString.length) {
        setDisplayText(typingString.slice(0, currentCharacter));
        currentCharacter++;
      } else {
        currentCharacter = 0;
      }
    }, 100);

    // cleanup:
    return () => clearInterval(typingEffect);
  }, [typingString]);

  return (
    <StyledIntroHeader>
      <h4>Hi There 👋, I'm</h4>
      <h1>BRIAN DAVIES</h1>
      <h5>(aka SOMMCODER)</h5>
      {/* <StyledTypingWrapper typingAnimation={typingAnimation}>
        {displayText}
      </StyledTypingWrapper> */}
    </StyledIntroHeader>
  );
}
const StyledIntroHeader = styled.span`
  align-content: center;
  align-self: left;
  display: grid;
  row-gap: 1rem;
  width: 100%;
  grid-column: span 3;
  margin-bottom: 2rem;

  h4 {
    display: flex;
    flex-shrink: 1;
    line-height: 1.3;
    font-size: 2rem;
    white-space: collapse balance;
    max-width: 51rem;
  }
  h1 {
    display: flex;
    flex-wrap: wrap;
    font-size: 4rem;
  }
  h5 {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.4rem;
  }

  // 768px
  /* @media (min-width: 30rem) {
    grid-column: span 2;
  } */

  // 768px
  @media (min-width: 48rem) {
    margin-bottom: 0rem;
    grid-column: span 2;
  }
`;

const StyledTypingWrapper = styled.h4`
  ${({ typingAnimation }) =>
    typingAnimation &&
    css`
      animation: ${typingAnimation} 1s infinite;
    `}
`;
