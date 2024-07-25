import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a Toronto wine sommelier turned <wbr />
      web developer and your one-stop-shop for all things Shopify!
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
