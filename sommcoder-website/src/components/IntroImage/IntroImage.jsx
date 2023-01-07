import styled from "styled-components";
import headshot from "../../assets/headshot.jpeg";

export default function IntroImage() {
  return (
    <StyledIntroImageBox>
      <img image alt="Brian Davies Headshot" src={headshot} />
    </StyledIntroImageBox>
  );
}
const StyledIntroImageBox = styled.div`
  justify-self: right;
  border: 2px solid #bba6d2;
  max-width: 20rem;
  height: auto;
  border-radius: 50%;
  align-self: center;
  overflow: hidden;

  img {
    justify-self: right;
    max-width: 20rem;
    align-self: center;
  }

  // when the screen is sub 500px, we will wrap this component to be adjacent to teh IntroDescription component and display: none on the HeroGraphic (completed)
`;
