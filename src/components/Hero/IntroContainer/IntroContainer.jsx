import styled from "styled-components";
import IntroDescription from "../IntroDescription/IntroDescription";
import ContactBtn from "../ContactBtn/ContactBtn";
import IntroHeader from "../IntroHeader/IntroHeader";
import IntroImage from "../IntroImage/IntroImage";

import wineDrip2 from "/wine-drips2.svg";

export default function IntroContainer() {
  return (
    <StyledIntroContainer>
      <IntroHeader />
      <IntroDescription />
      <IntroImage headshot="headshot" />
      <ContactBtn />
      <StyledBottomDrip src={wineDrip2} />
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: grid;
  justify-self: center;
  // 4 rows on mobile:
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(3, auto);
  background-color: rgba(61, 80, 64, 0.9);
  border-radius: 2rem;
  margin: 1rem 2rem 2rem 2rem;
  padding: 2.5rem;
  max-width: 95rem;
  height: auto;

  img {
    height: 90%;
    width: 90%;
  }

  // 480px
  @media (min-width: 34rem) {
    padding: 4rem 6rem 0rem 4rem;
    // 4 rows on > mobile:
    grid-template-rows: repeat(3, auto);
  }
`;

// specified a styled component to not get it mixed up with the above img
const StyledBottomDrip = styled.img`
  display: inline;
  min-height: 5rem;
  min-width: 8rem;
  max-width: 10rem;
  transform: rotateX(180deg);
  justify-self: center;
  grid-row: 3;
  grid-column: 2 / span 2;
  // 480px
  @media (min-width: 34rem) {
    justify-self: right;
  }
`;
