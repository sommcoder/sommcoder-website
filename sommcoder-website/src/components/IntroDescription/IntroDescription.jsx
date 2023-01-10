import styled from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier turned web developer based in Toronto, ON, Canada.
      I'm a hospitality alumni with over 12 years of experience on the floor
      from serving tables and running preshift to buying wine and liquor for
      multi-outlet venues!
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.div`
  align-self: center;
  grid-column: span 2;
`;
