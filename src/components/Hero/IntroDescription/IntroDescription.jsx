import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier <wbr /> turned web developer based in Toronto with
      over 12 years of progressive experience in the hospitality industry.
      <br />I now specialize in Shopify website and app development for the Food
      & Beverage industry!
      <br /> Whether you need a custom theme, app, new feature or store launch,
      <wbr /> I'll help you "uncork" your business's web potential! 🍾
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.p`
  align-self: center;
  grid-column: span 3;
  line-height: 2.2rem;
  margin-bottom: 4rem;

  // 480px
  @media (min-width: 30rem) {
    grid-column: span 2;
  }
`;
