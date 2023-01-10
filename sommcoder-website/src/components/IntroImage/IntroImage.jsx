import styled from "styled-components";
import headshot from "../../assets/headshot.png";

export default function IntroImage() {
  return (
    <StyledIntroImageBox>
      <img image alt="Brian Davies Headshot" src={headshot} />
    </StyledIntroImageBox>
  );
}
const StyledIntroImageBox = styled.span`
  justify-self: center;
  justify-content: center;
  align-self: center;
  max-height: 205px;
  max-width: 205px;
  height: auto;
  width: auto;
  clip-path: circle(50.5% at 50% 50%);
  background-color: pink;
  margin-left: 1rem;

  /*
 
should definitely make the intro image smaller for mobile!
 
*/

  img {
    display: inline-block;
    max-height: 195px;
    max-width: 195px;
    height: auto;
    width: auto;
    clip-path: circle(50% at 50% 50%);
  }

  @media (max-width: 475px) {
    grid-column: span 2;
    justify-self: left;
    max-height: 165px;
    max-width: 165px;

    img {
      max-height: 120px;
      max-width: 120px;
    }
  }

  // when the screen is sub 500px, we will wrap this component to be adjacent to teh IntroDescription component and display: none on the HeroGraphic (completed)
`;
