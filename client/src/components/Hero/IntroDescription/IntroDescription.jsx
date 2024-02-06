import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier <wbr /> turned web developer based in Toronto <br />
      with over 12 years of progressive experience in Food & Beverage
      Management. <br />
      <br /> Now I specialize in Shopify development for Hospitality
      enterprises!
      <br /> Whether you need a custom theme, API integration, new merchant
      launch or staff training,
      <wbr /> I'll help you "uncork" your business's web potential! 🍾
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.p`
  align-self: center;
  grid-column: span 2;
  line-height: 2.2rem;
`;
