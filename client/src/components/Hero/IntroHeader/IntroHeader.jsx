import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
   0% {
        background-color: white;
    }
    55% {
      background-color: white;
    }
    100% {
         background-color: transparent;
     }
    `;

const TypingContainer = styled.h4`
  margin-top: 1rem;
  font-family: Arial, sans-serif;
  font-size: 16px;
  white-space: pre-wrap;
  overflow: hidden;
`;

const TypingText = styled.span`
  display: inline-block;
`;

const TypingCursor = styled.span`
  display: inline-block;
  height: 2rem;
  width: 0.2rem;
  background-color: white;
  line-height: 1;
  margin-left: 0.5rem;
  animation: ${blink} 1s infinite;
`;

// Needs to be declared OUTSIDE of the component
const text = "I'M A REACT DEVELOPER, WINE SOMMELIER & SHOPIFY EXPERT.";

export default function IntroHeader() {
  // we will use useEffect to incrementally add sliced characters and set them using this useState hook
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <StyledIntroHeader>
      <h4>Hi There 👋, I'm</h4>
      <h1>BRIAN DAVIES</h1>
      <h5>(aka SOMMCODER)</h5>
      <TypingContainer>
        <TypingText>
          {displayText}
          <TypingCursor />
        </TypingText>
      </TypingContainer>
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
  margin-bottom: 2.25rem;

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
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.4rem;
  }
  // 768px
  @media (min-width: 48rem) {
    margin-bottom: 1rem;
    grid-column: span 2;
  }
`;
