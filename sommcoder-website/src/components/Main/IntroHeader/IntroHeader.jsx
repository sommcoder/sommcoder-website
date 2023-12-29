import styled from "styled-components";

export default function IntroHeader() {
  return (
    <StyledIntroHeader>
      <h5>Hi There 👋, I'm</h5>
      <h1>
        BRIAN DAVIES<h5>(aka SOMMCODER)</h5>
      </h1>
      <h4>A FULL-STACK REACT DEVELOPER & SHOPIFY E-COMMERCE EXPERT</h4>
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
  }

  @media (max-width: 475px) {
    grid-column: span 2;
    justify-content: center;
  }
`;
