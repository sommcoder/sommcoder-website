import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier <wbr /> turned web developer based in Toronto with
      over 12 years of progressive experience in the hospitality industry. With
      over 4 years of experience I specialize in Shopify development for Food &
      Beverage businesses!
      <br />
      <br /> Whether you need a custom theme, API integration, new store launch
      or staff training,
      <wbr /> I'll help you "uncork" your business's web potential! 🍾
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.p`
  align-self: center;
  grid-column: span 3;
  line-height: 2.2rem;

  // 640px
  @media (min-width: 40rem) {
    grid-column: span 2;
  }
`;
