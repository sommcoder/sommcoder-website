import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier turned web developer based in Toronto
      <br />
      with over 12 years of experience buying and selling wine. <br /> Now I
      specialize in Shopify development for Hospitality enterprises but am open
      to other projects. Just ask!😊
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.p`
  align-self: center;
  grid-column: span 2;
  line-height: 2.2rem;
`;
