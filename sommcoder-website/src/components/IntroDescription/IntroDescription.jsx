import styled from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      <h5>Hi There 👋, I'm</h5>
      <h1>
        BRIAN DAVIES<h5>(aka SOMMCODER)</h5>
      </h1>
      <h4>
        A FULL-STACK REACT DEVELOPER
        <br />& SHOPIFY E-COMMERCE EXPERT
      </h4>
      <p>
        I'm a wine sommelier turned web developer based in Toronto, ON, Canada.
        I'm a hospitality alumni with over 12 years of experience on the floor
        from serving tables and running preshift to buying wine and liquor for
        multi-outlet venues!
      </p>
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
`;
