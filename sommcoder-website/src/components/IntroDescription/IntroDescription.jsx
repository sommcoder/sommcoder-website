import styled from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier turned web developer based in Toronto, ON, Canada.
      <br />
      I'm a hospitality pro with over 12 years of experience. <br /> I
      specialize in software integrations for Hospitality enterprices!
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.div`
  align-self: center;
  grid-column: span 2;
`;
