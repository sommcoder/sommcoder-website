import styled from "styled-components";

export default function IntroImage() {
  return (
    <StyledIntroImage
      alt="Brian Davies Headshot"
      src="../../assets/Headshot - Casual.jpeg"
    />
  );
}
const StyledIntroImage = styled.img`
  clip-path: circle(85%);
  border: 2px solid #bba6d2;
  width: 50px;
  height: 50px;
  /* background-image: url("../../assets/Headshot - Casual.jpeg"); */
  /* border-radius: 50%; */
`;
