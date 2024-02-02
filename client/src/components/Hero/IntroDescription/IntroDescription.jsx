import styled, { keyframes } from "styled-components";

export default function IntroDescription() {
  return (
    <StyledIntroDescription>
      I'm a wine sommelier <wbr /> turned web developer based in Toronto <br />
      with over 12 years of experience in Food & Beverage Management. <br /> Now
      I specialize in Shopify development for Hospitality enterprises <wbr />
      but would love to work on other projects as well. <wbr />
      Just ask!😊
    </StyledIntroDescription>
  );
}
const StyledIntroDescription = styled.p`
  align-self: center;
  grid-column: span 2;
  line-height: 2.2rem;
`;
