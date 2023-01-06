import styled from "styled-components";

export default function IntroImage() {
  return (
    <StyledIntroImage
      // alt="Brian Davies Headshot"
      src="../../assets/headshot.jpeg"
    />
  );
}
const StyledIntroImage = styled.img`
  justify-self: right;
  clip-path: circle(85%);
  border: 2px solid #bba6d2;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;

  // when the screen is sub 500px, we will wrap this component to be adjacent to teh IntroDescription component and display: none on the HeroGraphic (completed)
`;
